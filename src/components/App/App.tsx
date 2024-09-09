import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setUsers } from '../../features/users.ts';
import {
  setEmail,
  setName,
  setPhone,
  setUsername,
} from '../../features/filters.ts';
import { usersFilter } from '../../utils/usersFilter/usersFilter.ts';
import { Filter } from '../../types/Filter.ts';
import User from '../../types/User';
import './App.scss';
import { LoadingSpinner } from '../LoadingSpinner.jsx';
import { UsersFilterUI } from '../UserFilterUI/UserFilterUI.tsx';
import { UsersTableUI } from '../UsersTableUI/UsersTableUI.tsx';
import Header from '../Header/Header.tsx';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const [areUsersLoading, setAreUsersLoading] = useState(false);
  const [userLoadingError, setUserLoadingError] = useState(false);

  // Users state
  const users: User[] = useSelector((state: RootState) => state.users.value);
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);

  // Filters state
  const {
    name: nameFilter,
    username: usernameFilter,
    email: emailFilter,
    phone: phoneFilter,
  } = useSelector((state: RootState) => state.filters.value);
  const filtersObject = useSelector((state: RootState) => state.filters.value);

  // Filter pairs for dynamic filter inputs rendering
  const filters: Filter[] = [
    {
      name: 'name',
      placeholder: 'John Doe',
      value: nameFilter,
      action: setName,
    },
    {
      name: 'username',
      placeholder: 'john_doe123',
      value: usernameFilter,
      action: setUsername,
    },
    {
      name: 'email',
      placeholder: 'john.doe@gmail.com',
      value: emailFilter,
      action: setEmail,
    },
    {
      name: 'phone',
      placeholder: '010-692-6593',
      value: phoneFilter,
      action: setPhone,
    },
  ];

  useEffect(() => {
    setVisibleUsers(() => {
      return users;
    });
  }, [users]);

  // Actively filter users
  useEffect(() => {
    setVisibleUsers(() => {
      return users.filter((user) => usersFilter(user, filtersObject));
    });
  }, [filtersObject, users]);

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

        <div className="filters-list">

          {filters.map((filter) => (
            <UsersFilterUI key={filter.name} filterData={filter} />
          ))}

          <p className="filters-list__found-users">Znaleziono: {visibleUsers.length}</p>
        </div>
      </section>

      <section className="App__table">
        {userLoadingError && <p>Could not fetch the users</p>}

        {areUsersLoading && <div className="spinner-container">
          <LoadingSpinner />
        </div>}

        {!areUsersLoading &&
          (!!visibleUsers.length ? (
            <UsersTableUI users={visibleUsers} />
          ) : (
            <p className="no-users-message">
              No users found, consider clearing your filters.
            </p>
          ))}
      </section>
    </div>
  );
};

export default App;
