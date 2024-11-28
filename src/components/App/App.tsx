import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setUsers,
  setUsersError,
  setUsersLoading,
} from '../../features/users.ts';
import Header from '../Header/Header.tsx';
import UsersFilters from '../UsersFilters/UsersFilters.tsx';
import UsersTableContents from '../UsersTableContents/UsersTableSection.tsx';
import * as P from './App.parts.tsx';
import './App.scss';

export const App: React.FC = () => {
  const dispatch = useDispatch();

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
      <Header />

      <P.FiltersSection>
        <P.FiltersTitle>Filtry:</P.FiltersTitle>

        <UsersFilters />
      </P.FiltersSection>

      <P.UsersTableSection>
        <UsersTableContents />
      </P.UsersTableSection>
    </P.App>
  );
};

export default App;
