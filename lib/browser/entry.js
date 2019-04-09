"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterRedux = require("react-router-redux");

var _browserHistory = _interopRequireDefault(require("react-router/lib/browserHistory"));

var _match = _interopRequireDefault(require("react-router/lib/match"));

var _configStore = _interopRequireDefault(require("../reducer/configStore"));

var _filterComponent = _interopRequireDefault(require("./filterComponent"));

var _App = _interopRequireDefault(require("./App"));

/* eslint no-underscore-dangle:0 */
var _default = ({
  routes
}) => {
  const store = (0, _configStore.default)(window.__INITIAL_DATA__);
  const history = (0, _reactRouterRedux.syncHistoryWithStore)(_browserHistory.default, store);
  const domEl = document.getElementById('app'); // 区分多入口

  const matchLocation = location => onMatch => {
    const matchOpts = {
      history,
      routes
    };

    if (location) {
      matchOpts.location = location;
    }

    (0, _match.default)(matchOpts, (err, redirectLocation, routerState) => {
      console.log(routerState);
      let rerr;

      if (err) {
        rerr = err;
      } else if (redirectLocation) {
        rerr = new Error(`redirectLocation: ${redirectLocation}`);
      } else if (!routerState) {
        rerr = new Error(`match({ url: ${location && location.href} }): routerState is missing`);
        rerr.statusCode = 404;
      }

      if (rerr) {
        console.log(rerr);
      } else {
        onMatch(routerState);
      }
    });
  };

  const getInitialData = routerState => {
    const initDataFunc = (0, _filterComponent.default)(routerState.components, 'getInitialData');
    Promise.all(initDataFunc.map(func => store.dispatch(func()))).catch(() => {});
  };

  matchLocation(null)(() => {
    const el = _react.default.createElement(_App.default, {
      store,
      routes,
      history
    });

    _reactDom.default.render(el, domEl);

    history.listen(location => {
      console.log(location);
      matchLocation(location)(getInitialData);
    }); // router.listen(location => matchLocation(location)(getInitialData));
  });
};

exports.default = _default;