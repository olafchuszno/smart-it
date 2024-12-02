import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { Header } from '../Header';
import UsersFilters from '../UsersFilters/UsersFilters.tsx';
import UsersTableContents from '../UsersTableContents/UsersTableSection.tsx';
import * as P from './App.parts.tsx';
import { useThemeContext } from '../../contexts/ThemeContext.tsx';
import {
  setUsers,
  setUsersError,
  setUsersLoading,
} from '../../features/users.ts';
import { GlobalStyles } from 'styles/GlobalStyles.ts';

export const App: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useThemeContext();

  const dispatch = useDispatch();

  // Fetching users
  useEffect(() => {
    dispatch(setUsersLoading());

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }

        return response.json();
      })
      .then((json) => {
        dispatch(setUsers(json));
      })
      .catch(() => {
        dispatch(setUsersError());
      });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <P.App>
        <Header />

        <P.FiltersSection>
          <P.FiltersTitle>{t('filtersSection.title')}</P.FiltersTitle>

          <UsersFilters />
        </P.FiltersSection>

        <P.UsersTableSection>
          <UsersTableContents />
        </P.UsersTableSection>
      </P.App>
    </ThemeProvider>
  );
};

export default App;
