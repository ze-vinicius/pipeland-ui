import { TextStyleProps } from '../../atoms/text';
import { ButtonStyleProps } from './button.props';

const borderBaseStyle = {
  borderRadius: '4px',
};

export const buttonSizes = {
  small: {
    ...borderBaseStyle,
    p: 1,
  },
  medium: {
    ...borderBaseStyle,
    p: 2,
  },
  large: {
    ...borderBaseStyle,
    p: 3,
  },
};

export const buttonVariants: Record<string, ButtonStyleProps> = {
  primary: {
    backgroundColor: 'primary',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: 'primary',
    borderWidth: '1px',
  },
};

export const textVariants: Record<ButtonVariants, TextStyleProps> = {
  primary: {
    color: 'white',
  },
  ghost: {
    color: 'primary',
  },
  outline: {
    color: 'primary',
  },
};

export type ButtonVariants = 'primary' | 'ghost' | 'outline';
export type ButtonSizes = keyof typeof buttonSizes;
