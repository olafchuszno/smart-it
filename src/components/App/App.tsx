import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  setUsers,
  setUsersError,
  setUsersLoading,
} from '../../features/users.ts';
import Header from '../Header/Header.tsx';
import UsersFilters from '../UsersFilters/UsersFilters.tsx';
import UsersTableContents from '../UsersTableContents/UsersTableSection.tsx';
import * as P from './App.parts.tsx';
import LanguageMenu from '../LanguageMenu/LanguageMenu.tsx';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
    <P.App>
      <LanguageMenu />
      <Header />

      <P.FiltersSection>
        <P.FiltersTitle>{t('filters.title')}</P.FiltersTitle>

        <UsersFilters />
      </P.FiltersSection>

      <P.UsersTableSection>
        <UsersTableContents />
      </P.UsersTableSection>
    </P.App>
  );
};

export default App;
