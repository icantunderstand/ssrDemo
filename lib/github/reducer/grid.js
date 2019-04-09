"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UPDATE_LANGUAGE_ITEM = void 0;
const UPDATE_LANGUAGE_ITEM = 'UPDATE_LANGUAGE_ITEM';
exports.UPDATE_LANGUAGE_ITEM = UPDATE_LANGUAGE_ITEM;
const initState = {
  items: []
};

var _default = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_LANGUAGE_ITEM:
      {
        return { ...state,
          ...action.payload
        };
      }

    default:
      {
        return state;
      }
  }
};

exports.default = _default;