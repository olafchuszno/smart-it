import React from 'react';
import { LoadingSpinner } from '../LoadingSpinner';
import { UsersTableUI } from '../UsersTableUI/UsersTableUI.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import { UsersStatus } from '../../features/users.ts';
import * as P from './UsersTableSection.parts.tsx';

const UsersTableContents = () => {
  const { status } = useSelector((state: RootState) => state.users);

  const { sortedUsers: users } = useSelector((state: RootState) => state.users);

  const isFetchingUsers = status === UsersStatus.Fetching;
  const didUsersFetchingFailed = status === UsersStatus.Error;
  const hasAnyUsers = !!users.length;

  return (
    <>
      {didUsersFetchingFailed && <p>Could not fetch the users</p>}

      {isFetchingUsers && (
        <P.SpinnerContainer>
          <LoadingSpinner />
        </P.SpinnerContainer>
      )}

      {!isFetchingUsers &&
        (hasAnyUsers ? (
          <UsersTableUI users={users} />
        ) : (
          <P.NoUsersResultMessage>
            Nie znaleziono użytkownika.
          </P.NoUsersResultMessage>
        ))}
    </>
  );
};

export default UsersTableContents;
