import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import { theme as defaultTheme } from './theme';
export * from './components';
export * from './theme';
export const ThemeProvier = ({
  children,
  theme = {}
}) => {
  const overrideTheme = { ...defaultTheme,
    ...theme
  };
  return /*#__PURE__*/React.createElement(StyledComponentsThemeProvider, {
    theme: overrideTheme
  }, children);
};
//# sourceMappingURL=index.js.map