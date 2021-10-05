import styled from 'styled-components/native';
import { border, flexbox, layout, space, color } from 'styled-system';

import { ButtonStyleProps } from './button.props';

export const Button = styled.TouchableOpacity<ButtonStyleProps>`
  ${flexbox}
  ${color}
  ${layout}
  ${space}
  ${border}
`;
