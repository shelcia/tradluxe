import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { customTheme } from "./theme";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

const App = () => {
  const allPages = useRoutes(routes);

  const appTheme = customTheme({
    theme: "light",
    direction: "ltr",
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        {allPages}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
