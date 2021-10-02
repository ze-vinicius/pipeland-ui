// App.tsx
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import Storybook from "./storybook";

const App = () => (
  <ThemeProvider theme={theme}>
    <Storybook />
  </ThemeProvider>
);

export default App;
