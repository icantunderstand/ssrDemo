"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _index = _interopRequireDefault(require("./index"));

function configureStore(initialState = {}) {
  const store = (0, _redux.createStore)(_index.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk.default)));
  return store;
}