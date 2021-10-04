import React from 'react';
import { ThemeType } from './theme';
export * from './components';
export * from './theme';
export interface ThemeProviderProps {
    theme?: ThemeType;
}
export declare const ThemeProvier: React.FC<ThemeProviderProps>;
