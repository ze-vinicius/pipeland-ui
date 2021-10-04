import styled from 'styled-components/native';
import { border, backgroundColor, flexbox, layout, space } from 'styled-system';

import { ButtonStyleProps } from './button.props';

export const Button = styled.TouchableOpacity<ButtonStyleProps>`
  ${flexbox}
  ${backgroundColor}
  ${layout}
  ${space}
  ${border}
`;
