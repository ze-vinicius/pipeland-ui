import React from 'react';
import { ThemeType } from './theme';
export * from './components';
export * from './theme';
export interface ThemeProviderProps {
    theme?: Partial<ThemeType>;
}
declare const ThemeProvider: React.FC<ThemeProviderProps>;
export { ThemeProvider };
