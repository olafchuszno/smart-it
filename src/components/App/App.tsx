import React, { useEffect, useState } from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '../../app/store'
import User from '../../types/User';
import { setUsers } from '../../features/users.ts';
import { setEmail, setName, setPhone, setUsername } from '../../features/filters.ts';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { usersFilter } from '../../utils/usersFilter.ts';

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
  
  const headings = ['id', 'name', 'username', 'email', 'phone'];

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
      <div>
        <h2>Filters</h2>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {filters.map((filter) => {
            const [filterName, filterValue, filterAction] = filter;

            return (<div style={{border: "10px solid red"}}>
              <label htmlFor={`${filterName}-filter`}>
                {filterName}
              </label>

              <input
              onChange={(event) => {
                event.preventDefault()
                dispatch(filterAction(event.target.value.toLocaleLowerCase()))
              }}
              value={filterValue}
              id={`${filterName}-filter`}
              type="text"
            />
            </div>)
          })}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {headings.map((heading) => {
              return (<th key={heading}>
                {heading}
                </th>)
            })}
          </tr>
        </thead>
        {visibleUsers.length && <tbody>
          {visibleUsers.map((user: User) => {
            return (<tr key={user.id}>
              {headings.map((heading) => {
                return (<td key={heading}>
                  {user[heading]}
                </td>)
              })}
            </tr>)
          })}
        </tbody>}
      </table>
    </div>
  );
}

export default App;
