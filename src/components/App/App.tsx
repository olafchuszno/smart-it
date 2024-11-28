import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import {
  setUsers,
  setUsersError,
  setUsersLoading,
  UsersStatus,
} from '../../features/users.ts';
import User from '../../types/User';
import Header from '../Header/Header.tsx';
import { SortField } from '../../types/SortFields.ts';
import { SortOption } from '../../types/SortOption.ts';
import UsersFilters from '../UsersFilters/UsersFilters.tsx';
import UsersTableSection from '../UsersTableSection/UsersTableSection.tsx';
import './App.scss';

function sortUsers(setVisibleUsers, sortField, users, sortOption) {
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
}

export const App: React.FC = () => {
  const dispatch = useDispatch();

  // Users state
  const { value: users, status } = useSelector(
    (state: RootState) => state.users
  );
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);

  // Sort state
  const { field: sortField, option: sortOption } = useSelector(
    (state: RootState) => state.sort.value
  );

  useEffect(() => {
    setVisibleUsers(() => {
      return users;
    });
  }, [users]);

  // Actively sort users
  useEffect(() => {
    sortUsers(setVisibleUsers, sortField, users, sortOption);
  }, [sortField, sortOption, users]);

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

  const areUsersLoading = status === UsersStatus.Fetching;
  const userLoadingError = status === UsersStatus.Error;

  return (
    <div className="App">
      <Header />

      <section className="App__filters filters">
        <h2 className="filters__title">Filtry:</h2>

        <UsersFilters
          visibleUsers={visibleUsers}
          setVisibleUsers={setVisibleUsers}
        />
      </section>

      <section className="App__table">
        <UsersTableSection
          visibleUsers={visibleUsers}
          areUsersLoading={areUsersLoading}
          userLoadingError={userLoadingError}
        />
      </section>
    </div>
  );
};

export default App;
