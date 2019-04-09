"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _api = _interopRequireDefault(require("./api"));

class Grid extends _react.Component {
  render() {
    const {
      items
    } = this.props;
    console.log(items);
    return _react.default.createElement("ul", {
      style: {
        display: 'flex',
        flexWrap: 'wrap'
      }
    }, items.map(({
      name,
      owner
    }) => _react.default.createElement("li", {
      key: name,
      style: {
        margin: 30
      }
    }, _react.default.createElement("ul", null, _react.default.createElement("li", null, name), _react.default.createElement("li", null, owner)))));
  }

}

const mapStateToProps = state => {
  const {
    items
  } = state.github;
  return {
    items
  };
};

const ConnectedView = (0, _reactRedux.connect)(mapStateToProps)(Grid);

ConnectedView.getInitialData = () => (0, _api.default)();

var _default = ConnectedView;
exports.default = _default;