import React from 'react';

import { TextProps } from './text.props';
import * as S from './text.styles';

export const Text: React.FC<TextProps> = ({ children, variant, ...rest }) => {
  return (
    <S.Text variant={variant || 'body1'} {...rest}>
      {children}
    </S.Text>
  );
};
