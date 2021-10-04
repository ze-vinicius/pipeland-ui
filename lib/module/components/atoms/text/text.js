function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import * as S from './text.styles';
export const Text = ({
  children,
  variant,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement(S.Text, _extends({
    variant: variant || 'body1'
  }, rest), children);
};
//# sourceMappingURL=text.js.map