import { palette } from './palette';

export type ColorType = typeof colors;

const colors = {
  transparent: 'transparent',
  black: '#000000',
  white: '#FFFFFF',
  gray: palette.grays[5],
  red: palette.reds[5],
  orange: palette.oranges[5],
  yellow: palette.yellows[5],
  green: palette.greens[5],
  teal: palette.teals[5],
  blue: palette.blues[5],
  cyan: palette.cyans[5],
  purple: palette.purples[5],
  pink: palette.pinks[5],
  primary: palette.blues[5],
  main: palette.grays[9],
  error: palette.reds[5],
  ...palette,
};

export { colors };
