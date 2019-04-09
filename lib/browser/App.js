"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _Router = _interopRequireDefault(require("react-router/lib/Router"));

var _RouterContext = _interopRequireDefault(require("react-router/lib/RouterContext"));

const isServer = typeof window === 'undefined';
const RouterContainer = isServer ? _RouterContext.default : _Router.default;

const App = ({
  store,
  routes,
  history,
  renderProps
}) => _react.default.createElement(_reactRedux.Provider, {
  store: store
}, _react.default.createElement(RouterContainer, (0, _extends2.default)({
  routes: routes,
  history: history
}, renderProps)));

var _default = App;
exports.default = _default;