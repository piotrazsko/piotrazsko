import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const bigestFontSize = 36;
const majorFontSize = 20;
const largeFontSize = 18;
const mediumFontSize = 16;
const normalFontSize = 14;
const smallFontSize = 12;
const breakpoints = createBreakpoints({});
const transitionName = "cubic-bezier(0.7, 0, 0.25, 1)";
const marginTransition = `margin 0.5s ${transitionName}`;
const labelFontSize = 18;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffb100",
    },
    secondary: {
      main: "#000",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1400,
      xl: 1820,
    },
  },
  typography: {
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Roboto",
    fontColor: "#333",
    h3: { fontSize: "17px", fontWeight: "bold", textTransform: "uppercase" },
    h4: {},
    body1: {},
    body2: {},
    subtitle1: {
      fontSize: "13px",
      color: "#777",
    },
    subtitle2: {},
  },
  overrides: {
    MuiPaper: {
      root: {
        borderRadius: "6px",
        minHeight: "150px",
      },
      rounded: {
        borderRadius: "6px",
      },
      elevation1: {
        boxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.07)",
      },
    },
  },
});
