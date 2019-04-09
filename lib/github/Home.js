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

var _Nav = _interopRequireDefault(require("./Nav"));

var Home =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck2.default)(this, Home);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Home).apply(this, arguments));
  }

  (0, _createClass2.default)(Home, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement("div", null, "Select a Language", _react.default.createElement(_Nav.default, null), children);
    }
  }]);
  return Home;
}(_react.Component);

var _default = Home;
exports.default = _default;