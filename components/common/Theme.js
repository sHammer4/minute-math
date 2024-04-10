import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const colours = {
    primary: "#A997DF",
    secondary: "#1A3A3A",
    background: "#FEFEFE",
    dark: "#4F517D",
    light: "#DDC4DD",
    text: "#35465C",
    halfDark: "#7C74AE",
    black: "#000",
    white: "#FFF",
    green: "#0B6623",
    yellow: "#EDC001",
    red: "#B90E0A",
  };

  return (
    <ThemeContext.Provider value={colours}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider };
