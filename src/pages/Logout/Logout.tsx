import { routes } from 'constants/routes';
import { useAuthContext } from 'contexts/AuthContext'
import React from 'react'
import { Navigate } from 'react-router';

const Logout = () => {
  const { logUserOut } = useAuthContext();

  logUserOut();

  return (
    <Navigate to={routes.main.href} />
  )
}

export default Logout
