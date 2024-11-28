import React from 'react';
import { LoadingSpinner } from '../LoadingSpinner';
import { UsersTableUI } from '../UsersTableUI/UsersTableUI.tsx';

const UsersTableSection = ({ visibleUsers, userLoadingError, areUsersLoading }) => {
  return (
    <>
      {userLoadingError && <p>Could not fetch the users</p>}

      {areUsersLoading && (
        <div className="spinner-container">
          <LoadingSpinner />
        </div>
      )}

      {!areUsersLoading &&
        (!!visibleUsers.length ? (
          <UsersTableUI users={visibleUsers} />
        ) : (
          <p className="no-users-message">Nie znaleziono użytkownika.</p>
        ))}
    </>
  );
};

export default UsersTableSection;
