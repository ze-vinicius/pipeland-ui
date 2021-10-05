import React from 'react';

import { TextProps } from './text.props';
import { variants } from './text.presets';
import * as S from './text.styles';

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body1',
  ...rest
}) => {
  return (
    <S.Text {...variants[variant]} {...rest}>
      {children}
    </S.Text>
  );
};
