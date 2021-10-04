"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;

var _native = _interopRequireDefault(require("styled-components/native"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Box = _native.default.View`
  ${_styledSystem.space}
  ${_styledSystem.backgroundColor}
  ${_styledSystem.layout}
  ${_styledSystem.border}
  ${_styledSystem.shadow}
`;
exports.Box = Box;
//# sourceMappingURL=box.styles.js.map