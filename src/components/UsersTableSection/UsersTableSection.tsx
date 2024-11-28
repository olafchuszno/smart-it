import React from 'react';
import { LoadingSpinner } from '../LoadingSpinner';
import { UsersTableUI } from '../UsersTableUI/UsersTableUI.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import { UsersStatus } from '../../features/users.ts';

const UsersTableSection = () => {
  const { status } = useSelector((state: RootState) => state.users);

  const { sortedUsers: users } = useSelector((state: RootState) => state.users);
  
  const isFetchingUsers = status === UsersStatus.Fetching;
  const didUsersFetchingFailed = status === UsersStatus.Error;
  const hasAnyUsers = !!users.length;

  return (
    <>
      {didUsersFetchingFailed && <p>Could not fetch the users</p>}

      {isFetchingUsers && (
        <div className="spinner-container">
          <LoadingSpinner />
        </div>
      )}

      {!isFetchingUsers &&
        (hasAnyUsers ? (
          <UsersTableUI users={users} />
        ) : (
          <p className="no-users-message">Nie znaleziono użytkownika.</p>
        ))}
    </>
  );
};

export default UsersTableSection;
