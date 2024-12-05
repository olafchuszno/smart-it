import { resetFilters } from "features/filters";
import { resetSort } from "features/sort";
import { resetUsers } from "features/users";
import React, { createContext, FC, useContext, useState } from "react";
import { useDispatch } from "react-redux";

interface IProps {
  children: React.ReactNode
}

type User = {
  email: string
}

interface IAuthContext {
  isLoggedIn: boolean,
  user: User | null;
  logUserIn: (email: string, password: string) => void;
  logUserOut: () => void;
}

const AuthContext = createContext({} as IAuthContext); 


const AuthContextProvider: FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const dispatch = useDispatch();

  const logUserIn = (email: string, password: string) => {
    if (email !== 'email@smart-it.com' || password !== 'smart123') {
      throw new Error('Wrong credentials');
    }

    setUser({ email });
  }

  const logUserOut = () => {
    setUser(null);

    dispatch(resetUsers());
    dispatch(resetFilters());
    dispatch(resetSort());
  }

  const contextValue = {
    isLoggedIn: !!user,
    user,
    logUserIn,
    logUserOut
  }

  return <AuthContext.Provider value={contextValue}>
    {children}
  </AuthContext.Provider>
};

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export default AuthContextProvider;
