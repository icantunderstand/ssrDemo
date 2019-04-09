"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("react-router/lib/Link"));

var Nav =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Nav, _Component);

  function Nav() {
    (0, _classCallCheck2.default)(this, Nav);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Nav).apply(this, arguments));
  }

  (0, _createClass2.default)(Nav, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_Link.default, {
        to: "/github/popular/javascript"
      }, "javascript"));
    }
  }]);
  return Nav;
}(_react.Component);

var _default = Nav;
exports.default = _default;