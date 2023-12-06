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
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./pages/others/Errorfallback";

const App = () => {
  const allPages = useRoutes(routes);

  const appTheme = customTheme({
    theme: "light",
    direction: "ltr",
  });

  AOS.init();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <CustomScrollToTop />
          {allPages}
        </ThemeProvider>
      </StyledEngineProvider>
    </ErrorBoundary>
  );
};

export default App;
