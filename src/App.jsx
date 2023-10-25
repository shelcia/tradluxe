import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { customTheme } from "./theme";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import "./styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CustomScrollToTop from "./components/CustomScrollToTop";

const App = () => {
  const allPages = useRoutes(routes);

  const appTheme = customTheme({
    theme: "light",
    direction: "ltr",
  });

  AOS.init();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <CustomScrollToTop />
        {allPages}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
