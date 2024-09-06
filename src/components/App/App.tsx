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
import UsersTable from '../UsersTable/UsersTable.tsx';
import { Filter } from '../../types/Filter.ts';
import User from '../../types/User';
import './App.scss';
import { LoadingSpinner } from '../LoadingSpinner.jsx';
import { UsersFilterUI } from '../UserFilterUI/UserFilterUI.tsx';

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
      <header className="header">
        <nav className="header-navbar header__navbar">
          <a href="https://www.smart-it.com/pl/">
            <img
              className='header-navbar__logo'
              src="https://www.smart-it.com/wp-content/uploads/2022/05/logo-m.svg"
              alt="smart-it logo"
            />
          </a>
          <a className='nav-link' href="https://www.smart-it.com/pl/industries/">Usługi</a>
          <a className='nav-link' href="https://www.smart-it.com/pl/produkty/">Produkty</a>
          <a className='nav-link' href="https://www.smart-it.com/pl/klienci/sucess-stories/">Klienci</a>
          <a className='nav-link' href="https://www.smart-it.com/pl/company/">Firma</a>
          <a className='nav-link' href="https://www.smart-it.com/pl/company/contacts/">Skontaktuj się z nami</a>
          <a className='nav-link' href="https://www.smart-it.com/pl/kariera/oferty-pracy/">Oferty pracy</a>
          <a className='nav-link' href="https://www.smart-it.com/pl/kariera/staz/">Staż</a>
        </nav>

        <div className="header__title-container title-container">
          <h1 className="title">User Management Table:</h1>
        </div>
      </header>

      <section className="App__filters">
        <div className="filters">
          {/* <p className="filters__title">Filtry:</p> */}

          {filters.map((filter) => (
            <UsersFilterUI key={filter.name} filterData={filter} />
          ))}
        </div>
        {/* <p className="App__found-users">Znaleziono: {visibleUsers.length}</p> */}
      </section>

      <section className="App__table">
        {userLoadingError && <p>Could not fetch the users</p>}

        {areUsersLoading && <div className="spinner-container">
          <LoadingSpinner />
        </div>}

        {!areUsersLoading &&
          (!!visibleUsers.length ? (
            <UsersTable users={visibleUsers} />
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
