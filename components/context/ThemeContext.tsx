import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: JSX.Element;
};

export const ThemeContext = createContext(theme);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
