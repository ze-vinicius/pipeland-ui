"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = void 0;

var _palette = require("./palette");

const colors = {
  transparent: 'transparent',
  black: '#000000',
  white: '#FFFFFF',
  gray: _palette.palette.grays[5],
  red: _palette.palette.reds[5],
  orange: _palette.palette.oranges[5],
  yellow: _palette.palette.yellows[5],
  green: _palette.palette.greens[5],
  teal: _palette.palette.teals[5],
  blue: _palette.palette.blues[5],
  cyan: _palette.palette.cyans[5],
  purple: _palette.palette.purples[5],
  pink: _palette.palette.pinks[5],
  primary: _palette.palette.blues[5],
  main: _palette.palette.grays[9],
  error: _palette.palette.reds[5],
  ..._palette.palette
};
exports.colors = colors;
//# sourceMappingURL=colors.js.map