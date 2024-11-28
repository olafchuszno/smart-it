import React, { useEffect, useMemo } from 'react';
import { UsersFilterUI } from '../UserFilterUI/UserFilterUI.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import {
  setEmail,
  setName,
  setPhone,
  setUsername,
} from '../../features/filters.ts';
import { Filter } from '../../types/Filter.ts';
import * as P from './UsersFilters.parts.tsx';
import { filterUsers, sortUsers } from '../../features/users.ts';

const UsersFilters = () => {
  const { filteredUsers } = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch()

  const { field: sortField, option: sortOption } = useSelector((state: RootState) => state.sort.value);

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
    console.log('filter users');
    console.log('filtersObject:', {filtersObject});

    dispatch(filterUsers(filtersObject));
    dispatch(sortUsers({ sortField, sortOption }));
  }, [dispatch, filtersObject, sortField, sortOption]);

  // Filter pairs for dynamic filter inputs rendering
  const filters: Filter[] = useMemo(() => [
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
  ], [emailFilter, nameFilter, phoneFilter, usernameFilter]);

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
        Znaleziono: {filteredUsers.length}
      </P.FoundUsersInfo>
    </P.FiltersList>
  );
};

export default UsersFilters;
