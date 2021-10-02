import styled from 'styled-components/native';
import { space, backgroundColor, layout, border, shadow } from 'styled-system';
import { BoxStyleProps } from './box.props';

export const Box = styled.View<BoxStyleProps>`
  ${space}
  ${backgroundColor}
  ${layout}
  ${border}
  ${shadow}
`;
