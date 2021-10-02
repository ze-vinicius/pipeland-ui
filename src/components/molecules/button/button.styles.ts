import styled from 'styled-components/native';
import { border, color, layout, space } from 'styled-system';

import { ButtonStyleProps } from './button.props';

export const Button = styled.TouchableOpacity<ButtonStyleProps>`
  ${color}
  ${layout}
  ${space}
  ${border}
`;
