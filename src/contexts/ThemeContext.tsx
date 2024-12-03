import React, { createContext, useContext, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import darkTheme from '../styles/themes/darkTheme.ts';
import lightTheme from '../styles/themes/lightTheme.ts';
import useLocalStorage from 'hooks/useLocalStorage.ts';
import StorageSetterFunction from 'types/StorageSetterFunction.ts';

enum ThemesAvailable {
  Dark = 'dark',
  Light = 'light',
}

interface ThemeContextInterface {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: DefaultTheme;
}

const ThemeContext = createContext({} as ThemeContextInterface);

interface Props {
  children: React.ReactNode;
}

const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [storageThemeValue, setStorageThemeValue] = useLocalStorage(
    ThemesAvailable.Light,
    'theme-color'
  );

  const [isDarkMode, setIsDarkMode] = useState(
    storageThemeValue === ThemesAvailable.Dark
  );
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setStorageThemeValue(((currentValue: ThemesAvailable) =>
      currentValue === ThemesAvailable.Light
        ? ThemesAvailable.Dark
        : ThemesAvailable.Light) as StorageSetterFunction);
    setIsDarkMode((current) => !current);
  };

  const contextValue = {
    isDarkMode,
    toggleTheme,
    theme: currentTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default ThemeContextProvider;
