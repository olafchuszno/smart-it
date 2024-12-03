// core
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router';
// components
import { Header } from '../Header';
import Login from 'pages/Login/Login.tsx';
import Logout from 'pages/Logout/Logout.tsx';
import ErrorPage from 'pages/ErrorPage/ErrorPage.tsx';
import UsersManagement from 'pages/UsersManagement/UsersManagement.tsx';
// state
import { useThemeContext } from '../../contexts/ThemeContext.tsx';
// styles
import { GlobalStyles } from 'styles/GlobalStyles.ts';
import * as P from './App.parts.tsx';
import About from 'pages/About/About.tsx';
import MainPage from 'pages/Main/Main.tsx';
import { routes } from 'constants/routes.ts';

export const App: React.FC = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <P.App>
        <Header />

        <Routes>
          <Route index path={routes.main.href} element={<MainPage />} />

          <Route
            path={routes['users-management'].href}
            element={<UsersManagement />}
          />

          <Route path={routes.about.href} element={<About />} />

          <Route path={routes.login.href} element={<Login />} />

          <Route path="logout" element={<Logout />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </P.App>
    </ThemeProvider>
  );
};

export default App;
