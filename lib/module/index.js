import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import merge from 'lodash.merge';
import { theme as defaultTheme } from './theme';
export * from './components';
export * from './theme';

const ThemeProvider = ({
  children,
  theme = {}
}) => {
  const overrideTheme = merge(defaultTheme, theme);
  return /*#__PURE__*/React.createElement(StyledComponentsThemeProvider, {
    theme: overrideTheme
  }, children);
};

export { ThemeProvider };
//# sourceMappingURL=index.js.map