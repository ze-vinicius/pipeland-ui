"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _native = _interopRequireDefault(require("styled-components/native"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = _native.default.TouchableOpacity`
  ${_styledSystem.color}
  ${_styledSystem.layout}
  ${_styledSystem.space}
  ${_styledSystem.border}
`;
exports.Button = Button;
//# sourceMappingURL=button.styles.js.map