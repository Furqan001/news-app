import React, { createContext, useContext } from "react";
import { useThemeContext } from "./ThemeContext";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function useColorModeContext() {
  return useContext(ColorModeContext) as any;
}

export default function ColorContextProvider(props: { children: any }) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      {props.children}
    </ColorModeContext.Provider>
  );
}
