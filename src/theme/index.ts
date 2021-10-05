import { Theme } from 'styled-system';
import { colors } from './colors';
import { space } from './space';
import { fontSizes } from './fontSizes';

export const theme: Theme = {
  colors,
  fontSizes,
  space,
};

export type ThemeType = typeof theme;
