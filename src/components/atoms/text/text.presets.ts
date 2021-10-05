import { TextStyleProps } from './text.props';

const BASE_STYLE = {
  color: 'main',
  fontSize: 2,
};

export const variants: Record<TextVariants, TextStyleProps> = {
  header: {
    ...BASE_STYLE,
    fontSize: 4,
    fontWeight: 'bold',
  },

  title: {
    ...BASE_STYLE,
    fontSize: 3,
    fontWeight: 'bold',
  },

  subtitle: {
    ...BASE_STYLE,
    color: 'gray',
  },

  body1: {
    ...BASE_STYLE,
  },

  body2: {
    ...BASE_STYLE,
    fontSize: 1,
  },

  caption: {
    ...BASE_STYLE,
    fontSize: 0,
    color: 'gray',
  },

  button: {
    ...BASE_STYLE,
    fontWeight: 500,
    textTransform: 'uppercase',
  },
};

export type TextVariants =
  | 'header'
  | 'title'
  | 'subtitle'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button';
