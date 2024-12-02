import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  setUsers,
  setUsersError,
  setUsersLoading,
} from '../../features/users.ts';
import {Header} from '../Header';
import UsersFilters from '../UsersFilters/UsersFilters.tsx';
import UsersTableContents from '../UsersTableContents/UsersTableSection.tsx';
import * as P from './App.parts.tsx';
import { useThemeContext } from '../../contexts/ThemeContext.tsx';
import { ThemeProvider } from 'styled-components';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { theme, isDarkMode, toggleTheme } = useThemeContext();

  // Fetching users
  useEffect(() => {
    dispatch(setUsersLoading());

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        dispatch(setUsers(json));
      })
      .catch(() => {
        dispatch(setUsersError());
      });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>

      <P.App>
        <Header />

        <P.FiltersSection>
        <button onClick={toggleTheme}>
        {isDarkMode ? 'light mode' : 'dark mode'}
      </button>
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
