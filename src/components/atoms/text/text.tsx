import React from 'react';

import { TextProps } from './text.props';
import * as Styled from './text.styles';

export const Text: React.FC<TextProps> = ({ children, variant, ...rest }) => {
  return (
    <Styled.Text variant={variant || 'body1'} {...rest}>
      {children}
    </Styled.Text>
  );
};
