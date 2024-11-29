import React, { createContext, useContext, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import darkTheme from '../styles/themes/darkTheme.ts';
import lightTheme from '../styles/themes/lightTheme.ts';

interface ThemeContextInterface {
  isDarkMode: boolean,
  toggleTheme: () => void,
  theme: DefaultTheme
}

const ThemeContext = createContext({} as ThemeContextInterface);

interface Props {
  children: React.ReactNode
}

const ThemeContextProvider: React.FC<Props> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(current => !current);
  }

  const contextValue = {
    isDarkMode,
    toggleTheme,
    theme: currentTheme
  }

  return <ThemeContext.Provider value={contextValue}>
    {children}
  </ThemeContext.Provider>;
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
}

export default ThemeContextProvider;
