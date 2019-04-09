"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("react-router/lib/Link"));

class Nav extends _react.Component {
  render() {
    return _react.default.createElement("div", null, _react.default.createElement(_Link.default, {
      to: "/github/popular/javascript"
    }, "javascript"));
  }

}

var _default = Nav;
exports.default = _default;