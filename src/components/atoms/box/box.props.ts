import {
  SpaceProps,
  BackgroundColorProps,
  LayoutProps,
  BorderProps,
  ShadowProps,
  FlexboxProps,
} from 'styled-system';

export type BoxStyleProps = FlexboxProps &
  SpaceProps &
  BackgroundColorProps &
  LayoutProps &
  BorderProps &
  ShadowProps;

export type BoxProps = BoxStyleProps;
