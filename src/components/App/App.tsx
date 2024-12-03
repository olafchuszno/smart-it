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

export const App: React.FC = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <P.App>
        <Header />

        <Routes>
          <Route
            index
            path="/"
            element={<p>This is the landing page! Cool design and stuff.</p>}
          />

          <Route path="users-management" element={<UsersManagement />} />

          <Route
            path="about"
            element={
                <p>
                  This is a very long history of the company. Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Dolores modi itaque,
                  optio ex fugiat maxime tempora commodi animi deleniti
                  provident eligendi fuga, nulla in corrupti ullam maiores
                  magnam, consequuntur quae!
                </p>
            }
          />

          <Route path="login" element={<Login />} />

          <Route path="logout" element={<Logout />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </P.App>
    </ThemeProvider>
  );
};

export default App;
