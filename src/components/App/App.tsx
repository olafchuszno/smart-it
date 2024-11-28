import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setUsers } from '../../features/users.ts';
import User from '../../types/User';
import { LoadingSpinner } from '../LoadingSpinner.jsx';
import { UsersTableUI } from '../UsersTableUI/UsersTableUI.tsx';
import Header from '../Header/Header.tsx';
import { SortField } from '../../types/SortFields.ts';
import { SortOption } from '../../types/SortOption.ts';
import './App.scss';
import UsersFilters from '../UsersFilters/UsersFilters.tsx';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const [areUsersLoading, setAreUsersLoading] = useState(false);
  const [userLoadingError, setUserLoadingError] = useState(false);

  // Users state
  const users: User[] = useSelector((state: RootState) => state.users.value);
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);

  // Sort state
  const { field: sortField, option: sortOption } = useSelector((state: RootState) => state.sort.value);


  useEffect(() => {
    setVisibleUsers(() => {
      return users;
    });
  }, [users]);


  // Actively sort users
  useEffect(() => {
    setVisibleUsers((currentUsers) => {
      if (sortField === SortField.None) {
        return [...users];
      }

      return [...currentUsers].sort((userA: User, userB: User) => {
        if (sortOption === SortOption.Asc) {
          return userA[sortField].localeCompare(userB[sortField]);
        } else {
          return userB[sortField].localeCompare(userA[sortField]);
        }
      });
    });
  }, [sortField, sortOption, users]);

  // Fetching users
  useEffect(() => {
    setAreUsersLoading(true);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        dispatch(setUsers(json));
      })
      .catch(() => {
        setUserLoadingError(true);
      })
      .finally(() => setAreUsersLoading(false));
  }, [dispatch]);

  return (
    <div className="App">
      <Header />

      <section className="App__filters filters">
        <h2 className="filters__title">Filtry:</h2>

        <UsersFilters visibleUsers={visibleUsers} setVisibleUsers={setVisibleUsers} />
      </section>

      <section className="App__table">
        {userLoadingError && <p>Could not fetch the users</p>}

        {areUsersLoading && (
          <div className="spinner-container">
            <LoadingSpinner />
          </div>
        )}

        {!areUsersLoading &&
          (!!visibleUsers.length ? (
            <UsersTableUI users={visibleUsers} />
          ) : (
            <p className="no-users-message">
              Nie znaleziono użytkownika.
            </p>
          ))}
      </section>
    </div>
  );
};

export default App;
