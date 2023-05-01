import { createTheme, PaletteColorOptions } from "@mui/material/styles";
import { APP_COLORS, APP_FONTS } from "./enums";

/** Module Declaration */
declare module "@mui/material/styles" {
  interface CustomPalette {
    milkWhite: PaletteColorOptions;
    gitHub: PaletteColorOptions;
    facebook: PaletteColorOptions;
    google: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    milkWhite: true;
    gitHub: true;
    facebook: true;
    google: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    milkWhite: true;
    gitHub: true;
    facebook: true;
    google: true;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    gitHub: true;
    facebook: true;
    google: true;
  }
}

const defaultTheme = createTheme({
  spacing: 10,
});
const { augmentColor } = defaultTheme.palette;
const createColor = (mainColor: any) =>
  augmentColor({
    color: {
      main: mainColor,
    },
  });
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [APP_FONTS.ROOT_PRIMARY_FONT].join(","),
    h2: {
      fontSize: defaultTheme.spacing(4.4),
      lineHeight: 1.2,
      fontWeight: 500,
    },
    h3: {
      fontSize: defaultTheme.spacing(3.6),
      fontWeight: 500,
      lineHeight: 1.3,
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: defaultTheme.spacing(3.2),
        lineHeight: 1.3,
      },
    },
    h4: {
      fontSize: defaultTheme.spacing(3),
      lineHeight: 1,
      fontWeight: 500,
    },
    h5: {
      fontSize: defaultTheme.spacing(2.8),
      lineHeight: 1,
      fontWeight: 500,
    },
    h6: {
      fontSize: defaultTheme.spacing(2.2),
      fontWeight: 500,
      lineHeight: 1,
    },
    subtitle2: {
      fontSize: defaultTheme.spacing(1.8),
    },
    body1: {
      fontSize: defaultTheme.spacing(1.6),
    },
    body2: {
      fontSize: defaultTheme.spacing(1.4),
      fontWeight: 500,
    },
    caption: {
      fontSize: defaultTheme.spacing(1.2),
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: "inherit",
        position: "sticky",
      },
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${defaultTheme.palette.divider}`,
          paddingLeft: defaultTheme.spacing(2),
          paddingRight: defaultTheme.spacing(2),
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
        size: "medium",
        color: "primary",
      },
      styleOverrides: {
        root: {
          fontWeight: 400,
          textTransform: "none",
          borderRadius: 0,
          minWidth: defaultTheme.spacing(10),
        },
        sizeMedium: {
          height: defaultTheme.spacing(4.2),
          fontSize: defaultTheme.spacing(1.6),
        },
        sizeLarge: {
          height: 55,
          fontSize: defaultTheme.spacing(1.8),
          lineHeight: defaultTheme.spacing(5.3) + "px",
        },
        sizeSmall: {
          height: 30,
          fontSize: defaultTheme.spacing(1.4),
        },
      },
    },
    MuiTab: {
      defaultProps: {},
      styleOverrides: {
        root: {
          fontSize: defaultTheme.spacing(1.6),
          textTransform: "none",
          minWidth: 50,
          color: defaultTheme.palette.text.primary,
        },
      },
    },
  },
});

export default theme;
