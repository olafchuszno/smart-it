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
import { filterUsers, sortUsers } from '../../features/users.ts';
import useIsMobile from '../../hooks/useIsMobile.ts';
import * as P from './UsersFilters.parts.tsx';
import { useTranslation } from 'react-i18next';
import Text from 'components/generics/Text/Text.tsx';

const UsersFilters = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { filteredUsers } = useSelector((state: RootState) => state.users);
  const { field: sortField, option: sortOption } = useSelector(
    (state: RootState) => state.sort.value
  );
  const filtersObject = useSelector((state: RootState) => state.filters.value);

  // Filters state
  const {
    name: nameFilter,
    username: usernameFilter,
    email: emailFilter,
    phone: phoneFilter,
  } = useSelector((state: RootState) => state.filters.value);

  // Actively filter users
  useEffect(() => {
    dispatch(filterUsers(filtersObject));
    dispatch(sortUsers({ sortField, sortOption }));
  }, [dispatch, filtersObject, sortField, sortOption]);

  // Filter pairs for dynamic filter inputs rendering
  const filters: Filter[] = useMemo(
    () => [
      {
        name: t('filters.name.header'),
        placeholder: t('filters.name.placeholder'),
        value: nameFilter,
        action: setName,
      },
      {
        name: t('filters.username.header'),
        placeholder: t('filters.username.placeholder'),
        value: usernameFilter,
        action: setUsername,
      },
      {
        name: t('filters.email.header'),
        placeholder: t('filters.email.placeholder'),
        value: emailFilter,
        action: setEmail,
      },
      {
        name: t('filters.phone.header'),
        placeholder: t('filters.phone.placeholder'),
        value: phoneFilter,
        action: setPhone,
      },
    ],
    [emailFilter, nameFilter, phoneFilter, t, usernameFilter]
  );

  return (
    <P.FiltersList>
      {filters.map((filter) => (
        <P.FilterContainer key={filter.name}>
          <UsersFilterUI filterData={filter} />
        </P.FilterContainer>
      ))}

      {!isMobile && (
        <P.FoundUsersInfo>
          <Text>
            {t('filtersSection.foundMessage')}
            : <br />
            {filteredUsers.length}
          </Text>
        </P.FoundUsersInfo>
      )}
    </P.FiltersList>
  );
};

export default UsersFilters;
