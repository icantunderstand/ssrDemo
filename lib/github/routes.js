"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Home = _interopRequireDefault(require("./Home"));

var _Grid = _interopRequireDefault(require("./Grid"));

const routes = [{
  path: '/github',
  component: _Home.default,
  childRoutes: [{
    path: 'popular/:id',
    component: _Grid.default
  }]
}];
var _default = routes;
exports.default = _default;