import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.

export let getDesignTokens = (mode: PaletteMode) => {
  let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: "inherit",
    },
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#0B409C",
              dark: "#404040",
              light: "#3c66b0",
            },
            common: {
              white: "#FFFFFF",
              black: "#242d35",
              grey: "#c2c0c0",
              darkGray: "#484848",
              lightGrey: "#F3F5FA",
            },
            secondary: {
              main: "#ffbf00",
              light: "#F4F4F4",
              dark: "#FFFFFF",
            },
            text: {
              primary: "#656663",
              secondary: "#004F59",
            },
            background: {
              default: "#F8F9F9",
              paper: "#FFFFFF",
              primaryLight: "#e9e9fd",
            },
            error: {
              main: "#d32f2f",
              dark: "#dd4a54",
            },
            success: {
              main: "#227d26",
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: "#8b0b9c",
              dark: "#404040",
              light: "#3c66b0",
            },
            common: {
              white: "#FFFFFF",
              black: "#242d35",
              grey: "#c2c0c0",
              darkGray: "#484848",
              lightGrey: "#F3F5FA",
            },
            secondary: {
              main: "#ffbf00",
              light: "#303030",
              dark: "#FFFFFF",
            },
            text: {
              primary: "#656663",
              secondary: "#004F59",
            },
            background: {
              default: "#000",
              paper: "#FFFFFF",
              primaryLight: "#F8F9FA",
            },
            error: {
              main: "#d32f2f",
              dark: "#dd4a54",
            },
            success: {
              main: "#227d26",
            },
          }),
    },
    additionalColors: {
      ...(mode === "light"
        ? {
            lightGrey: "#EFEFEF",
            primaryTranslucent: "#0093e766",
          }
        : {
            lightGrey: "#EFEFEF",
            primaryTranslucent: "#0093e766",
          }),
    },
    borderRadius: {
      radius1: "4px",
      radius2: "8px",
      radius3: "16px",
    },
    height: {
      barHeight: "58px",
      tabHeight: "43px",
    },
    shape: {
      borderRadius: 4,
    },
    shadow: {
      // boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
      boxShadow: "0px 8px 24px rgb(56 61 66 / 8%)",
    },
  });

  theme = createTheme(theme, {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            minHeight: "100vh",
            minWidth: "100%",
            fontSize: "14px",
          },
          body: {
            fontWeight: "500",
            position: "absolute",
            minHeight: "100vh",
            minWidth: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: "12px",
            "#__next": {
              minHeight: "100%",
            },
            color: theme.palette.common.black,
            main: {
              minHeight: "100vh",
              marginBottom: "50px",
            },
            scrollbarColor: theme.palette.background,
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: theme.palette.background,
              width: "8px",
              height: "2px",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: theme.palette.primary.dark,
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
              {
                backgroundColor: theme.palette.primary.dark,
              },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
              {
                backgroundColor: theme.palette.primary.dark,
              },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: theme.palette.primary.dark,
              },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadow.boxShadow,
            borderRadius: "4px",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            whiteSpace: "nowrap",
            fontWeight: "600",
            "&.MuiButton-sizeMedium": {
              fontSize: "14px",
              lineHeight: "35px",
              [theme.breakpoints.up("md")]: {
                padding: "8px 30px",
              },
            },
            "&.MuiButton-sizeSmall": {
              fontSize: "12px",
              [theme.breakpoints.up("md")]: {
                padding: "4px 16px",
              },
            },
            "& .MuiSvgIcon-root": {
              fill: "currentColor",
            },
          },

          contained: {
            // padding: "12px 0",
            "&:hover": {
              backgroundColor: theme.palette.primary.light,
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            "& .MuiSvgIcon-root": {
              fill: "currentColor",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            color: theme.palette.primary.main,
            backgroundColor: theme.additionalColors?.lightGrey,

            "& svg": {
              fill: theme.palette.primary.main,
            },
            // "&:hover": {
            //   backgroundColor: theme.palette.,
            // },
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fill: theme.palette.primary.main,
          },
        },
      },
    },
    typography: {
      body1: {
        fontWeight: "500",
      },
      h1: {
        fontSize: "40px",
        color: theme.palette.primary.main,
        fontWeight: 700,
        // [theme.breakpoints.down("md")]: {
        //   fontSize: "32px",
        // },
        // [theme.breakpoints.down("sm")]: {
        //   fontSize: "20px",
        // },
      },
      h2: {
        fontSize: "32px",
        color: theme.palette.primary.main,
        fontWeight: 500,
        // [theme.breakpoints.down("md")]: {
        //   fontSize: "24px",
        // },
      },
    },
  });
  return theme;
};
