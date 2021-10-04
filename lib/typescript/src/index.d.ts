import React from 'react';
import { ThemeType } from './theme';
export * from './components';
export * from './theme';
export interface ThemeProviderProps {
    theme?: ThemeType;
}
declare const ThemeProvider: React.FC<ThemeProviderProps>;
export { ThemeProvider };
