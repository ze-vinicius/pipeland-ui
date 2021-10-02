import { TextProps as ReactNativeTextProps } from 'react-native';
import { StyledTextProps } from './text.styles';
import { TextVariants } from './text.variants';

export interface TextProps extends StyledTextProps, ReactNativeTextProps {
  variant?: TextVariants;
}
