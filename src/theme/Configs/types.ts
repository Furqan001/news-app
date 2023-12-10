declare module "@mui/material/styles" {
  interface Theme {
    additionalColors?: {
      lightGrey: string;
      primaryTranslucent: string;
    };
    borderRadius: {
      radius1: string;
      radius2: string;
      radius3: string;
    };
    height: {
      barHeight: string;
      tabHeight: string;
    };
    shadow: {
      boxShadow: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    additionalColors?: {
      lightGrey: string;
      primaryTranslucent: string;
    };
    borderRadius?: {
      radius1?: string;
      radius2?: string;
      radius3?: string;
    };
    height?: {
      barHeight: string;
      tabHeight: string;
    };
    shadow?: {
      boxShadow?: string;
    };
  }
}

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    grey: string;
    darkGray: string;
    lightGrey: string;
  }
  interface TypeBackground {
    default: string;
    paper: string;
    primaryLight: string;
  }
}

export {};
