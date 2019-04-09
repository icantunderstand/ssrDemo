"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Nav = _interopRequireDefault(require("./Nav"));

class Home extends _react.Component {
  render() {
    const {
      children
    } = this.props;
    return _react.default.createElement("div", null, "Select a Language", _react.default.createElement(_Nav.default, null), children);
  }

}

var _default = Home;
exports.default = _default;