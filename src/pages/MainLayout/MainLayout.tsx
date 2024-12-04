import React from 'react';
import { useThemeContext } from "contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/GlobalStyles";
import { Header } from 'components/Header';
import { Outlet } from 'react-router';
import * as P from './MainLayout.parts';

const MainLayout = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <P.App>
        <Header />

        <Outlet />
      </P.App>
    </ThemeProvider>
  );
};

export default MainLayout
