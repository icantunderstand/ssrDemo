"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _grid = require("./reducer/grid");

var _default = function _default() {
  return function (dispatch) {
    var items = [{
      name: 'sss',
      owner: 'sss'
    }, {
      name: 'aaa',
      owner: 'aaa'
    }, {
      name: 'bbb',
      owner: 'bbb'
    }, {
      name: 'xxx',
      owner: 'xxx'
    }];
    dispatch({
      type: _grid.UPDATE_LANGUAGE_ITEM,
      payload: {
        items: items
      }
    });
    return Promise.resolve();
  };
};

exports.default = _default;