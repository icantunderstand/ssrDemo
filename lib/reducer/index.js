"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRouterRedux = require("react-router-redux");

var _appName = _interopRequireDefault(require("./appName"));

var _default = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  appName: _appName.default
});

exports.default = _default;