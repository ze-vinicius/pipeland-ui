// App.tsx
import React from 'react';
import { ThemeProvider } from './src';

import Storybook from './storybook';

const App: React.FC = () => (
  <ThemeProvider>
    <Storybook />
  </ThemeProvider>
);

export default App;
