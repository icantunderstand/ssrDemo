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

var _reactRedux = require("react-redux");

var _api = _interopRequireDefault(require("./api"));

var Grid =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Grid, _Component);

  function Grid() {
    (0, _classCallCheck2.default)(this, Grid);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Grid).apply(this, arguments));
  }

  (0, _createClass2.default)(Grid, [{
    key: "render",
    value: function render() {
      var items = this.props.items;
      console.log(items);
      return _react.default.createElement("ul", {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        }
      }, items.map(function (_ref) {
        var name = _ref.name,
            owner = _ref.owner;
        return _react.default.createElement("li", {
          key: name,
          style: {
            margin: 30
          }
        }, _react.default.createElement("ul", null, _react.default.createElement("li", null, name), _react.default.createElement("li", null, owner)));
      }));
    }
  }]);
  return Grid;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var items = state.github.items;
  return {
    items: items
  };
};

var ConnectedView = (0, _reactRedux.connect)(mapStateToProps)(Grid);

ConnectedView.getInitialData = function () {
  return (0, _api.default)();
};

var _default = ConnectedView;
exports.default = _default;