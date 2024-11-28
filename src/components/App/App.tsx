import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setUsers,
  setUsersError,
  setUsersLoading,
} from '../../features/users.ts';
import Header from '../Header/Header.tsx';
import UsersFilters from '../UsersFilters/UsersFilters.tsx';
import UsersTableSection from '../UsersTableSection/UsersTableSection.tsx';
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
