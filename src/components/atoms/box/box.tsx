import React from 'react';

import styled from 'styled-components/native';
import {
  SpaceProps,
  space,
  BackgroundColorProps,
  backgroundColor,
  LayoutProps,
  layout,
  BorderProps,
  border,
  ShadowProps,
  shadow,
} from 'styled-system';

type StyledBoxProps = SpaceProps &
  BackgroundColorProps &
  LayoutProps &
  BorderProps &
  ShadowProps;

const StyledBox = styled.View<StyledBoxProps>`
  ${space}
  ${backgroundColor}
  ${layout}
  ${border}
  ${shadow}
`;

type BoxProps = StyledBoxProps;

const Box: React.FC<BoxProps> = ({ children, ...styleProps }) => (
  <StyledBox {...styleProps}>{children}</StyledBox>
);

export { Box };
