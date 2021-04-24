import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000b18",
      light: "#DAE7FF",
      dark: "#000b18",
    },
    secondary: {
      main: "#5D79BA",
      light: "#5D79BA",
    },
    text: {
      primary: "#323339", // Black
      secondary: "#686A79", // Dark Grey
      // disabled: '',
      // hint: ''
    },
    background: {
      default: "transparent",
    },
    common: {
      black: "#323339",
      white: "#FFFFFF",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: `'Bai Jamjuree', sans-serif`,
    allVariants: { letterSpacing: 0.1 },
    h1: { fontSize: 60, fontWeight: 600, lineHeight: "75px" },
    h2: { fontSize: 32, fontWeight: 600, lineHeight: "40px" },
    h3: { fontSize: 24, fontWeight: 600, lineHeight: "30px" },
    h4: { fontSize: 20, fontWeight: 600, lineHeight: "25px" },
    h5: { fontSize: 18, fontWeight: 600, lineHeight: "22px" },
    h6: { fontSize: 16, fontWeight: 600, lineHeight: "20px" },
    body1: { fontSize: 16, fontWeight: "normal", lineHeight: "24px" },
    body2: { fontSize: 14, fontWeight: "normal", lineHeight: "20px" },
    subtitle1: { fontSize: 12, fontWight: "normal", lineHeight: "15px" },
    // subtitle2: {},
    caption: { fontSize: 10, fontWeight: "normal", lineHeight: "12px" },
    button: { fontSize: 16, fontWeight: 600, lineHeight: "24px" },
    overline: {},
  },
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiFormControlLabel: { label: { fontSize: "0.833rem !important" } },
    MuiButton: {
      root: {
        borderRadius: "6px",
      },
      label: { textTransform: "none" },
      text: { textTransform: "none" },
      containedPrimary: {
        background: `var(--primary-gradient)`,
      },
      containedSecondary: {
        background: `var(--secondary-gradient)`,
      },
    },
    MuiRadio: {
      root: {
        width: "24px",
        height: "24px",
        marginRight: "8px",
      },
      colorSecondary: {
        "&$checked": {
          color: `var(--green)`,
        },
      },
    },
    MuiCheckbox: {
      root: {
        width: "24px",
        height: "24px",
        marginRight: "8px",
      },
      colorSecondary: {
        "&$checked": {
          color: `var(--green)`,
        },
      },
    },
    MuiOutlinedInput: {
      adornedEnd: {
        paddingRight: 4,
      },
      root: {
        backgroundColor: "white",
      },
    },
    MuiSwitch: {
      colorSecondary: {
        padding: 1,
        "&$checked": {
          transform: "translateX(16px)",
          color: "#FFF",
          "& + $track": {
            backgroundColor: "var(--green)",
            opacity: 1,
            border: "none",
          },
        },
      },
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: "8px",
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 26 / 2,
        // border: `1px solid var(--light-grey)`,
        backgroundColor: `var(--light-grey)`,
        opacity: 1,
      },
    },
    // MuiInputLabel: {
    //   outlined: {
    //     transform: 'translate(14px, 16px) scale(1)'
    //   }
    // },
  },
  // breakpoints: {
  //
  // },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.04),0px 1px 3px 0px rgba(0,0,0,0.02)",
    "0px 3px 1px -2px rgba(0,0,0,0.1),0px 2px 2px 0px rgba(0,0,0,0.04),0px 1px 5px 0px rgba(0,0,0,0.02)",
    "0px 3px 3px -2px rgba(0,0,0,0.1),0px 3px 4px 0px rgba(0,0,0,0.04),0px 1px 8px 0px rgba(0,0,0,0.02)",
    "0px 2px 4px -1px rgba(0,0,0,0.1),0px 4px 5px 0px rgba(0,0,0,0.04),0px 1px 10px 0px rgba(0,0,0,0.02)",
    "0px 3px 5px -1px rgba(0,0,0,0.1),0px 5px 8px 0px rgba(0,0,0,0.04),0px 1px 14px 0px rgba(0,0,0,0.02)",
    "0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.04),0px 1px 18px 0px rgba(0,0,0,0.02)",
    "0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.04),0px 2px 16px 1px rgba(0,0,0,0.02)",
    "0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.04),0px 3px 14px 2px rgba(0,0,0,0.02)",
    "0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.04),0px 3px 16px 2px rgba(0,0,0,0.02)",
    "0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.04),0px 4px 18px 3px rgba(0,0,0,0.02)",
    "0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.04),0px 4px 20px 3px rgba(0,0,0,0.02)",
    "0px 7px 8px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.04),0px 5px 22px 4px rgba(0,0,0,0.02)",
    "0px 7px 8px -4px rgba(0,0,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.04),0px 5px 24px 4px rgba(0,0,0,0.02)",
    "0px 7px 9px -4px rgba(0,0,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.04),0px 5px 26px 4px rgba(0,0,0,0.02)",
    "0px 8px 9px -5px rgba(0,0,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.04),0px 6px 28px 5px rgba(0,0,0,0.02)",
    "0px 8px 10px -5px rgba(0,0,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.04),0px 6px 30px 5px rgba(0,0,0,0.02)",
    "0px 8px 11px -5px rgba(0,0,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.04),0px 6px 32px 5px rgba(0,0,0,0.02)",
    "0px 9px 11px -5px rgba(0,0,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.04),0px 7px 34px 6px rgba(0,0,0,0.02)",
    "0px 9px 12px -6px rgba(0,0,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.04),0px 7px 36px 6px rgba(0,0,0,0.02)",
    "0px 10px 13px -6px rgba(0,0,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.04),0px 8px 38px 7px rgba(0,0,0,0.02)",
    "0px 10px 13px -6px rgba(0,0,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.04),0px 8px 40px 7px rgba(0,0,0,0.02)",
    "0px 10px 14px -6px rgba(0,0,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.04),0px 8px 42px 7px rgba(0,0,0,0.02)",
    "0px 11px 14px -7px rgba(0,0,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.04),0px 9px 44px 8px rgba(0,0,0,0.02)",
    "0px 11px 15px -7px rgba(0,0,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.04),0px 9px 46px 8px rgba(0,0,0,0.02)",
  ],
});
