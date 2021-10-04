"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ThemeProvider: true
};
exports.ThemeProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _native = require("styled-components/native");

var _lodash = _interopRequireDefault(require("lodash.merge"));

var _theme = require("./theme");

Object.keys(_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _theme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _theme[key];
    }
  });
});

var _components = require("./components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _components[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ThemeProvider = ({
  children,
  theme = {}
}) => {
  const overrideTheme = (0, _lodash.default)(_theme.theme, theme);
  return /*#__PURE__*/_react.default.createElement(_native.ThemeProvider, {
    theme: overrideTheme
  }, children);
};

exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=index.js.map