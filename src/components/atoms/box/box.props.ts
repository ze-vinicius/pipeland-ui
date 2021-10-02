import {
  SpaceProps,
  BackgroundColorProps,
  LayoutProps,
  BorderProps,
  ShadowProps,
} from 'styled-system';

export type BoxStyleProps = SpaceProps &
  BackgroundColorProps &
  LayoutProps &
  BorderProps &
  ShadowProps;

export type BoxProps = BoxStyleProps;
