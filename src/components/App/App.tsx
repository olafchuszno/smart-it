import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {RootState} from '../../app/store'
import { setUsers } from '../../features/users.ts';
import { setEmail, setName, setPhone, setUsername } from '../../features/filters.ts';
import User from '../../types/User';
import { usersFilter } from '../../utils/usersFilter/usersFilter.ts';
import './App.css';
import UsersTable from '../UsersTable/UsersTable.tsx';
import { UsersFilter } from '../UsersFilter/UsersFilter.tsx';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  
  // Users state
  const users: User[] = useSelector((state: RootState) => state.users.value);
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);
  
  // Filters state
  const {
    name: nameFilter,
    username: usernameFilter,
    email: emailFilter,
    phone: phoneFilter }
    = useSelector((state: RootState) => state.filters.value);
  const filtersObject = useSelector((state: RootState) => state.filters.value);

  // Filter pairs for dynamic filter inputs rendering
  type filterPair = [string, string, ActionCreatorWithPayload<string>];
  const filters: filterPair[] = [
    ['name', nameFilter, setName],
    ['username', usernameFilter, setUsername],
    ['email', emailFilter, setEmail],
    ['phone', phoneFilter, setPhone]
  ];

  useEffect(() => {
    setVisibleUsers(() => {
      return users;
    })
  }, [users]);

  useEffect(() => {
    setVisibleUsers(() => {
      return users.filter(user => usersFilter(user, filtersObject))
    })
  }, [filtersObject, users]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => { 
        dispatch(setUsers(json))
      });
  }, [dispatch]);

  return (
    <div className="App">
      <h1 className='title'>User Management Table:</h1>

      <section>
        <div
          style={{ display: "flex", justifyContent: "space-evenly" }}
          className='filters'
        >
          {filters.map((filter) => {
            const [filterName, filterValue, filterAction] = filter;

            return (<UsersFilter
              filterName={filterName}
              filterValue={filterValue}
              filterAction={filterAction}
            />)
          })}
        </div>
      </section>

      <section>
        {!!visibleUsers.length && <UsersTable users={visibleUsers} />}
      </section>
    </div>
  );
}

export default App;
