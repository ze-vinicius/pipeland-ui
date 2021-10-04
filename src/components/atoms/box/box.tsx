import React from 'react';

import { BoxProps } from './box.props';
import * as S from './box.styles';

const Box: React.FC<BoxProps> = ({ children, ...styleProps }) => (
  <S.Box {...styleProps}>{children}</S.Box>
);

export { Box };
