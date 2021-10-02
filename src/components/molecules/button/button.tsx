import React from 'react';
import { Text } from '../../atoms';

import * as S from './button.styles';
import { ButtonProps, ButtonStyleProps } from './button.props';
import { buttonSizes, buttonVariants, textVariants } from './button.presets';
import { TextStyleProps } from '../../atoms/text/text.props';

const Button: React.FC<ButtonProps> = ({
  children,
  textStyle,
  variant = 'primary',
  size = 'medium',
  ...rest
}) => {
  const buttonStyleProps: ButtonStyleProps = {
    ...buttonVariants[variant],
    ...buttonSizes[size],
  };

  const textStyleProps: TextStyleProps = {
    variant: 'button',
    textAlign: 'center',
    ...textVariants[variant],
    ...textStyle,
  };

  return (
    <S.Button {...buttonStyleProps} {...rest}>
      <Text {...textStyleProps}>{children}</Text>
    </S.Button>
  );
};

export { Button };
