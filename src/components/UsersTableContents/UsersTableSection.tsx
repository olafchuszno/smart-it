import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { LoadingSpinner } from '../LoadingSpinner';
import { UsersTableUI } from '../UsersTableUI/UsersTableUI.tsx';
import * as P from './UsersTableSection.parts.tsx';
import { RootState } from '../../app/store.ts';
import {
  fetchUsers,
  UsersStatus,
} from '../../features/users.ts';
import useAppDispatch from 'hooks/useAppDispatch.ts';

const UsersTableContents = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { status } = useSelector((state: RootState) => state.users);

  const { sortedUsers: users } = useSelector((state: RootState) => state.users);

  const isFetchingUsers = status === UsersStatus.Fetching;
  const hasFetchingError = status === UsersStatus.Error;
  const hasAnyUsers = !!users.length;

  // Fetching users
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <P.UsersSectionContainer>
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
          <UsersTableUI />
        ) : (
          <P.NoUsersResultMessage>
            {t('usersTable.notFoundMessage')}
          </P.NoUsersResultMessage>
        ))}
    </P.UsersSectionContainer>
  );
};

export default UsersTableContents;
