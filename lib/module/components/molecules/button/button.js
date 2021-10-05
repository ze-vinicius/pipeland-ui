function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Text } from '../../atoms';
import * as S from './button.styles';
import { buttonSizes, buttonVariants, textVariants } from './button.presets';

const Button = ({
  children,
  textStyle,
  variant = 'primary',
  size = 'medium',
  ...rest
}) => {
  const buttonStyleProps = { ...buttonVariants[variant],
    ...buttonSizes[size]
  };
  const textStyleProps = {
    textAlign: 'center',
    ...textVariants[variant],
    ...textStyle
  };
  return /*#__PURE__*/React.createElement(S.Button, _extends({}, buttonStyleProps, rest), /*#__PURE__*/React.createElement(Text, textStyleProps, children));
};

export { Button };
//# sourceMappingURL=button.js.map