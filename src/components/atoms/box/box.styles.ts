import styled from 'styled-components/native';
import {
  space,
  backgroundColor,
  layout,
  border,
  shadow,
  flexbox,
} from 'styled-system';
import { BoxStyleProps } from './box.props';

export const Box = styled.View<BoxStyleProps>`
  ${flexbox}
  ${space}
  ${backgroundColor}
  ${layout}
  ${border}
  ${shadow}
`;
