import styled from 'styled-components/native';
import { typography, color, space } from 'styled-system';
import { TextStyleProps } from './text.props';

import { variants } from './text.variants';

const Text = styled.Text<TextStyleProps>`
  ${({ variant }) => variants[variant || 'body1']};
  ${color};
  ${typography};
  ${space};
`;

export { Text };
