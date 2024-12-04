import { routes } from 'constants/routes'
import React, { FC } from 'react'
import { Navigate } from 'react-router'

interface IProps {
  isLoggedIn: boolean,
  children: React.ReactNode
}

const PrivateRoute: FC<IProps> = ({ isLoggedIn, children }) => {
  
  if (!isLoggedIn) {
    return <Navigate replace to={routes.login.href} />
  }

  return <>{children}</>;
}

export default PrivateRoute
