import styled from 'styled-components/native';
import {
  TypographyProps,
  typography,
  color,
  ColorProps,
  SpaceProps,
  space,
} from 'styled-system';

import { variants, TextVariants } from './text.variants';

export interface StyledTextProps
  extends TypographyProps,
    ColorProps,
    SpaceProps {
  variant?: TextVariants;
}

const Text = styled.Text<StyledTextProps>`
  ${({ variant }) => variants[variant || 'body1']};
  ${color};
  ${typography};
  ${space};
`;

export { Text };
