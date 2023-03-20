import React, { useState } from "react";
import { ThemeProvider } from "emotion-theming";
import { themeDark, themeLight } from "./config/theme";
import Page from "./components/Page";

function App() {
  const [dark, setTheme] = useState(true);

  return (
    <ThemeProvider theme={dark ? themeDark : themeLight}>
      <Page setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
