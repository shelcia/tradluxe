import { createTheme, responsiveFontSizes } from "@mui/material";
import merge from "lodash.merge";
import {
  error,
  info,
  primary,
  secondary,
  success,
  warning,
} from "./themeColors";
const fontSize = 14;

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

const baseOptions = {
  direction: "ltr",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        icon: {
          display: "none", // Hide the icon
        },
        message: {
          width: "100%",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          height: "75%",
          width: "75%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "4px",
          // color: "inherit",
          boxShadow: "none",
          // padding: "0.6rem 1.5rem",
        },
        outlinedPrimary: {
          borderColor: primary.main,
          color: primary.main,
        },
        containedPrimary: {
          color: "white",
          "&:hover": {
            backgroundColor: primary.dark,
            boxShadow: "none",
          },
        },
        containedWarning: {
          // backgroundColor: warning.main,
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(94deg, #ABABAB -8.85%, #B7B7B7 32.41%, #EDEDED 56.97%, #B2B2B2 76.57%, #797979 103.05%)",
          color: "#0F0F0F",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.00938rem",
          lineHeight: "130%",
          textTransform: "uppercase",
          padding: "0.62rem 1.5rem",
          borderRadius: "50ex",
        },
        containedError: {
          color: "white",
        },
        outlinedWarning: {
          borderColor: warning.main,
          color: "#000",
          fontSize: "0.8125rem",
          fontWeight: 700,
          letterSpacing: "0.00938rem",
          lineHeight: "130%",
          textTransform: "uppercase",
          padding: "0.62rem 1.5rem",
          borderRadius: "50ex",
        },
        textWarning: {
          color: "#000",
          borderRadius: "50ex",
        },
        outlinedSuccess: {
          color: success,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          height: "100%",
          width: "100%",
        },
        body: {
          height: "100%",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
        "#root": {
          height: "100%",
        },
        "#nprogress .bar": {
          zIndex: "9999 !important",
          backgroundColor: "#61A9FF !important",
          width: "100%",
          position: "fixed",
        },
        "input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button":
          {
            WebkitAppearance: "none",
            margin: 0,
          },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: "hidden",
          backgroundColor: "#E5EAF2",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          marginRight: "16px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          minHeight: 0,
          "&.Mui-expanded": {
            minHeight: "auto",
          },
          ".MuiAccordionSummary-content": {
            margin: 0,
          },
          ".MuiAccordionSummary-content.Mui-expanded": {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          color: "#FFD600",
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& .MuiTableRow-root:last-of-type": {
            "& .MuiTableCell-root": {
              borderBottom: 0,
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#94A4C4",
          textTransform: "none",
          fontSize: 12,
          fontWeight: 600,
          padding: 0,
          minWidth: "auto",
          marginLeft: "1rem",
          marginRight: "1rem",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiButtonBase-root:first-of-type": {
            marginLeft: 0,
          },
          "& .MuiButtonBase-root:last-of-type": {
            marginRight: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          "& .MuiPopover-paper": {
            boxShadow: "none",
            borderRadius: "8px",
            border: "2px solid #E5EAF2",
          },
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: "'Open Sans', sans-serif",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input::placeholder": {
            color: secondary[400],
            opacity: 1,
          },
          "& label": {
            color: secondary[400],
            opacity: 1,
            fontWeight: 500,
          },
        },
      },
    },
  },
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontWeight: 800,
      fontSize: "4.25rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "4rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.25rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 600,
      fontSize,
    },
    overline: {
      fontWeight: 600,
    },
    body1: {
      fontSize,
    },
    body2: {
      fontSize,
    },
  },
};
const themesOptions = {
  [THEMES.LIGHT]: {
    palette: {
      primary,
      secondary,
      error,
      warning,
      success,
      info,
      divider: secondary[300],
      background: {
        default: "#F0F0F0",
      },
      text: {
        primary: secondary[500],
        secondary: secondary[300],
        disabled: secondary[400],
      },
      mode: "light",
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "saturate(100%) blur(10px)",
            boxShadow: "inset 1px -1px 2px 2px hsla(0,0%,100%,.1)",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(255, 255, 255, 0)",
            backdropFilter: "saturate(100%) blur(5px)",
            color: secondary[500],
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "#94A4C4",
          },
        },
      },
    },
  },
};
export const customTheme = (config) => {
  let themeOption = themesOptions[config.theme];

  if (!themeOption) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOption = themesOptions[THEMES.LIGHT];
  } //@ts-ignore

  const merged = merge({}, baseOptions, themeOption, {
    direction: config.direction,
  }); //@ts-ignore

  let theme = createTheme(merged);

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  } // theme shadows

  theme.shadows[1] = "0px 4px 23px rgba(0, 0, 0, 0.12)";
  theme.shadows[2] = "0px 0px 21px 1px rgba(0, 0, 0, 0.07)";
  theme.shadows[3] = "0px 10px 30px rgba(0, 0, 0, 0.1)";
  theme.shadows[4] = "0px 7px 30px 3px rgba(0, 0, 0, 0.05)"; // console.log(theme);

  return theme;
};
