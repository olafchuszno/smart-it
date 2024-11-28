import React, { useEffect } from 'react';
import { UsersFilterUI } from '../UserFilterUI/UserFilterUI.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import {
  setEmail,
  setName,
  setPhone,
  setUsername,
} from '../../features/filters.ts';
import { Filter } from '../../types/Filter.ts';
import { usersFilter } from '../../utils/usersFilter/usersFilter.ts';
import * as P from './UsersFilters.parts.tsx';

const UsersFilters = ({ visibleUsers, setVisibleUsers }) => {
  const { value: users } = useSelector((state: RootState) => state.users);

  // Filters state
  const {
    name: nameFilter,
    username: usernameFilter,
    email: emailFilter,
    phone: phoneFilter,
  } = useSelector((state: RootState) => state.filters.value);

  const filtersObject = useSelector((state: RootState) => state.filters.value);

  // Actively filter users
  useEffect(() => {
    setVisibleUsers(() => {
      return users.filter((user) => usersFilter(user, filtersObject));
    });
  }, [filtersObject, setVisibleUsers, users]);

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

  return (
    <P.FiltersList className="filters-list">
      {filters.map((filter) => (
        <span key={filter.name}>
          <form>
            <UsersFilterUI filterData={filter} />
          </form>
        </span>
      ))}

      <P.FoundUsersInfo className="filters-list__found-users">
        Znaleziono: {visibleUsers.length}
      </P.FoundUsersInfo>
    </P.FiltersList>
  );
};

export default UsersFilters;
