"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Count = _interopRequireDefault(require("./Count"));

var routes = [{
  path: '/countApp',
  component: _Count.default
}];
var _default = routes;
exports.default = _default;