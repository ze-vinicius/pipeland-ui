// App.tsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme';

import Storybook from './storybook';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Storybook />
  </ThemeProvider>
);

export default App;
