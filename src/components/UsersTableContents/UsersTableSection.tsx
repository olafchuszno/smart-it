import React from 'react';
import { LoadingSpinner } from '../LoadingSpinner';
import { UsersTableUI } from '../UsersTableUI/UsersTableUI.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import { UsersStatus } from '../../features/users.ts';
import * as P from './UsersTableSection.parts.tsx';
import { useTranslation } from 'react-i18next';

const UsersTableContents = () => {
  const {t} = useTranslation();
  const { status } = useSelector((state: RootState) => state.users);

  const { sortedUsers: users } = useSelector((state: RootState) => state.users);

  const isFetchingUsers = status === UsersStatus.Fetching;
  const hasFetchingError = status === UsersStatus.Error;
  const hasAnyUsers = !!users.length;

  return (
    <>
      {hasFetchingError && <P.FetchingErrorMessage>{t('usersTable.fetchingErrorMessage')}</P.FetchingErrorMessage>}

      {isFetchingUsers && (
        <P.SpinnerContainer>
          <LoadingSpinner />
        </P.SpinnerContainer>
      )}

      {!isFetchingUsers && !hasFetchingError &&
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
