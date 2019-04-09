"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UPDATE_LANGUAGE_ITEM = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var UPDATE_LANGUAGE_ITEM = 'UPDATE_LANGUAGE_ITEM';
exports.UPDATE_LANGUAGE_ITEM = UPDATE_LANGUAGE_ITEM;
var initState = {
  items: []
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_LANGUAGE_ITEM:
      {
        return (0, _objectSpread2.default)({}, state, action.payload);
      }

    default:
      {
        return state;
      }
  }
};

exports.default = _default;