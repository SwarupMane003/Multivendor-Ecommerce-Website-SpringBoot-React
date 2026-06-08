import { createTheme } from "@mui/material";

const customeTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#be185d",
      light: "#ec4899",
      dark: "#831843",
    },
    secondary: {
      main: "#7c3aed",
      light: "#a78bfa",
      dark: "#4c1d95",
    },
    background: {
      default: "#fff7fb",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#5b5363",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "none",
        },
      },
    },
  },
});

export default customeTheme;
