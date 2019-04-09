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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var Count =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Count, _Component);

  function Count() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Count);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Count)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      count: 0
    };
    return _this;
  }

  (0, _createClass2.default)(Count, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var count = this.state.count;
      return _react.default.createElement("div", {
        onClick: function onClick() {
          _this2.setState({
            count: count + 1
          });
        }
      }, count);
    }
  }]);
  return Count;
}(_react.Component);

exports.default = Count;