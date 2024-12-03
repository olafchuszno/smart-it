import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { Header } from '../Header';
import UsersFilters from '../UsersFilters/UsersFilters.tsx';
import UsersTableContents from '../UsersTableContents/UsersTableSection.tsx';
import * as P from './App.parts.tsx';
import { useThemeContext } from '../../contexts/ThemeContext.tsx';
import { Route, Routes } from 'react-router';

import { GlobalStyles } from 'styles/GlobalStyles.ts';
import Login from 'pages/Login/Login.tsx';

export const App: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <P.App>
        <Header />

        <Routes>
          <Route index path="/" element={<>
                <p>
                  This is the landing page! Cool design and stuff.
                </p>
              </>
            }
          />
          <Route
            path="users-management"
            element={
              <>
                <P.FiltersSection>
                  <P.FiltersTitle>{t('filtersSection.title')}</P.FiltersTitle>

                  <UsersFilters />
                </P.FiltersSection>

                <P.UsersTableSection>
                  <UsersTableContents />
                </P.UsersTableSection>
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
                <p>
                  This is a very long history of the company. Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Dolores modi itaque,
                  optio ex fugiat maxime tempora commodi animi deleniti
                  provident eligendi fuga, nulla in corrupti ullam maiores
                  magnam, consequuntur quae!
                </p>
              </>
            }
          />
          <Route
            path="login"
            element={
              <Login />
            }
          />
        </Routes>
      </P.App>
    </ThemeProvider>
  );
};

export default App;
