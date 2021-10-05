import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';

import { theme as defaultTheme, ThemeType } from './theme';
import { merge } from './utils';

export * from './components';
export * from './theme';

export interface ThemeProviderProps {
  theme?: ThemeType;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = {},
}) => {
  const overrideTheme = merge(defaultTheme, theme);

  return (
    <StyledComponentsThemeProvider theme={overrideTheme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export { ThemeProvider };
