import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import { theme as defaultTheme, ThemeType } from './theme';

export * from './components';
export * from './theme';

export interface ThemeProviderProps {
  theme?: ThemeType;
}

export const ThemeProvier: React.FC<ThemeProviderProps> = ({
  children,
  theme = {},
}) => {
  const overrideTheme = { ...defaultTheme, ...theme };

  return (
    <StyledComponentsThemeProvider theme={overrideTheme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};
