"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _native = _interopRequireDefault(require("styled-components/native"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Text = _native.default.Text`
  ${_styledSystem.color};
  ${_styledSystem.typography};
  ${_styledSystem.space};
`;
exports.Text = Text;
//# sourceMappingURL=text.styles.js.map