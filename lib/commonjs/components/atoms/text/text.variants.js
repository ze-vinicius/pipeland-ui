"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variants = void 0;

var _native = require("styled-components/native");

const BASE = (0, _native.css)`
  color: ${props => props.theme.colors.main};
  font-size: ${({
  theme
}) => theme.fontSizes[2]}px;
`;
const variants = {
  header: (0, _native.css)`
    ${BASE};

    font-size: ${({
    theme
  }) => theme.fontSizes[4]}px;
    font-weight: bold;
  `,
  title: (0, _native.css)`
    ${BASE}

    font-size: ${({
    theme
  }) => theme.fontSizes[3]}px;
    font-weight: bold;
  `,
  subtitle: (0, _native.css)`
    ${BASE}

    color: ${props => props.theme.colors.grays[5]};
  `,
  body1: (0, _native.css)`
    ${BASE}
  `,
  body2: (0, _native.css)`
    ${BASE}

    font-size: ${({
    theme
  }) => theme.fontSizes[1]}px;
  `,
  caption: (0, _native.css)`
    ${BASE}

    font-size: ${({
    theme
  }) => theme.fontSizes[0]}px;
    color: ${({
    theme
  }) => theme.colors.gray};
  `,
  button: (0, _native.css)`
    ${BASE}

    font-weight: 500;
    text-transform: uppercase;
  `
};
exports.variants = variants;
//# sourceMappingURL=text.variants.js.map