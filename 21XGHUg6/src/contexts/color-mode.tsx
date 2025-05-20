import { createContext, PropsWithChildren, useState, useEffect } from "react";
import { ConfigProvider, theme } from "antd";
import { lightThemes, darkThemes } from "../themes";
import "./transitions.css";

type ColorModeContextType = {
  mode: "light" | "dark";
  setMode: () => void;
  theme: "Blue" | "Purple" | "Magenta" | "Red" | "Orange" | "Yellow";
  setTheme: (theme: "Blue" | "Purple" | "Magenta" | "Red" | "Orange" | "Yellow") => void;
};

export const ColorModeContext = createContext<ColorModeContextType>({} as ColorModeContextType);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const colorModeFromLocalStorage = localStorage.getItem("colorMode") as "light" | "dark";
  const themeFromLocalStorage = localStorage.getItem("theme") as
    | "Blue"
    | "Purple"
    | "Magenta"
    | "Red"
    | "Orange"
    | "Yellow";

  const isSystemPreferenceDark = window?.matchMedia("(prefers-color-scheme: dark)")?.matches;
  const systemPreference = isSystemPreferenceDark ? "dark" : "light";

  const [mode, setMode] = useState<"light" | "dark">(colorModeFromLocalStorage || systemPreference);
  const [currentTheme, setCurrentTheme] = useState<"Blue" | "Purple" | "Magenta" | "Red" | "Orange" | "Yellow">(
    themeFromLocalStorage || "Blue",
  );

  useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const setColorMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ColorModeContext.Provider
      value={{
        mode,
        setMode: setColorMode,
        theme: currentTheme,
        setTheme: setCurrentTheme,
      }}>
      <ConfigProvider
        theme={{
          ...(mode === "light" ? lightThemes[currentTheme] : darkThemes[currentTheme]),
          algorithm: mode === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
        }}>
        {children}
      </ConfigProvider>
    </ColorModeContext.Provider>
  );
};
