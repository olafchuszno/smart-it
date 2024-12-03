import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { LoadingSpinner } from '../LoadingSpinner';
import { UsersTableUI } from '../UsersTableUI/UsersTableUI.tsx';
import { RootState } from '../../app/store.ts';
import { UsersStatus } from '../../features/users.ts';
import * as P from './UsersTableSection.parts.tsx';
import {
  setUsers,
  setUsersError,
  setUsersLoading,
} from '../../features/users.ts';

const UsersTableContents = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { status } = useSelector((state: RootState) => state.users);

  const { sortedUsers: users } = useSelector((state: RootState) => state.users);

  const isFetchingUsers = status === UsersStatus.Fetching;
  const hasFetchingError = status === UsersStatus.Error;
  const hasAnyUsers = !!users.length;

  // Fetching users
  useEffect(() => {
    dispatch(setUsersLoading());

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }

        return response.json();
      })
      .then((json) => {
        dispatch(setUsers(json));
      })
      .catch(() => {
        dispatch(setUsersError());
      });
  }, [dispatch]);

  return (
    <>
      {hasFetchingError && (
        <P.FetchingErrorMessage>
          {t('usersTable.fetchingErrorMessage')}
        </P.FetchingErrorMessage>
      )}

      {isFetchingUsers && (
        <P.SpinnerContainer>
          <LoadingSpinner />
        </P.SpinnerContainer>
      )}

      {!isFetchingUsers &&
        !hasFetchingError &&
        (hasAnyUsers ? (
          <UsersTableUI users={users} />
        ) : (
          <P.NoUsersResultMessage>
            {t('usersTable.notFoundMessage')}
          </P.NoUsersResultMessage>
        ))}
    </>
  );
};

export default UsersTableContents;
