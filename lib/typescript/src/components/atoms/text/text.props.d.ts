import { TextProps as ReactNativeTextProps } from 'react-native';
import { TypographyProps, ColorProps, SpaceProps } from 'styled-system';
import { TextVariants } from './text.variants';
export interface TextStyleProps extends TypographyProps, ColorProps, SpaceProps {
    variant?: TextVariants;
}
export interface TextProps extends TextStyleProps, ReactNativeTextProps {
}
