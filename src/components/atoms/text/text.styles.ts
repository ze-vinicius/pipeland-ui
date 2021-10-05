import styled from 'styled-components/native';
import { typography, color, space } from 'styled-system';
import { TextStyleProps } from './text.props';

const Text = styled.Text<TextStyleProps>`
  ${color};
  ${typography};
  ${space};
`;

export { Text };
