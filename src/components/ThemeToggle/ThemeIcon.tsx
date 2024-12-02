import React from 'react';
import SunIcon from './Icons/SunIcon';
import MoonIcon from './Icons/MoonIcon';

interface Props {
  isDarkMode: boolean;
}

const ThemeIcon: React.FC<Props> = ({ isDarkMode }) => {
  return isDarkMode ? <SunIcon /> : <MoonIcon />;
};

export default ThemeIcon;
