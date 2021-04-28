import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#18417A",
      light: "#316AB2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFCB05",
      dark: "#C7A008",
      contrastText: "#fff",
    },
  },
  background: {
    paper: "#FFF",
    default: "#FAFAFA",
  },
});

export default theme;
