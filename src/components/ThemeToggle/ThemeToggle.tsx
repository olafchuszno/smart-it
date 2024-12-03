import React, { FC } from 'react';
import ThemeIcon from './ThemeIcon';
import * as P from './ThemeToggle.parts';
import { useThemeContext } from 'contexts/ThemeContext';

const ThemeToggle: FC = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <P.ThemeToggleButton
      aria-roledescription="Changes website color theme"
      onClick={toggleTheme}
    >
      <ThemeIcon isDarkMode={isDarkMode} />
    </P.ThemeToggleButton>
  );
};

export default ThemeToggle;
