"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _routes = _interopRequireDefault(require("./routes"));

var _entry = _interopRequireDefault(require("../browser/entry"));

(0, _entry.default)({
  routes: _routes.default
});