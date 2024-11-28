import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import {
  setUsers,
  setUsersError,
  setUsersLoading,
} from '../../features/users.ts';
import Header from '../Header/Header.tsx';
import UsersFilters from '../UsersFilters/UsersFilters.tsx';
import UsersTableSection from '../UsersTableSection/UsersTableSection.tsx';
import { setVisibleUsers, sortUsers } from '../../features/visibleUsers.ts';
import './App.scss';


export const App: React.FC = () => {
  const dispatch = useDispatch();

  // Users state
  const { value: users } = useSelector(
    (state: RootState) => state.users
  );

  // Sort state
  const { field: sortField, option: sortOption } = useSelector(
    (state: RootState) => state.sort.value
  );

  useEffect(() => {
    dispatch(setVisibleUsers(users))
  }, [dispatch, users]);

  // Actively sort users
  useEffect(() => {
    dispatch(sortUsers({sortField, sortOption}))
  }, [dispatch, sortField, sortOption]);

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
    <div className="App">
      <Header />

      <section className="App__filters filters">
        <h2 className="filters__title">Filtry:</h2>

        <UsersFilters />
      </section>

      <section className="App__table">
        <UsersTableSection />
      </section>
    </div>
  );
};

export default App;
