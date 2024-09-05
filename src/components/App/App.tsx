import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '../../app/store'
import { setUsers } from '../../features/users.ts';
import { setEmail, setName, setPhone, setUsername } from '../../features/filters.ts';
import User from '../../types/User';
import { usersFilter } from '../../utils/usersFilter/usersFilter.ts';
import './App.css';
import UsersTable from '../UsersTable/UsersTable.tsx';
import { UsersFilter } from '../UsersFilter/UsersFilter.tsx';
import { Filter } from '../../types/Filter.ts';

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
  const filters: Filter[] = [
    {
      name: 'name',
      placeholder: 'John Doe',
      value: nameFilter,
      action: setName,
    },
    {
      name: 'username',
      placeholder: 'john_doe123',
      value: usernameFilter,
      action: setUsername,
    },
    {
      name: 'email',
      placeholder: 'john.doe@gmail.com',
      value: emailFilter,
      action: setEmail,
    },
    {
      name: 'phone',
      placeholder: '010-692-6593',
      value: phoneFilter,
      action: setPhone,
    },
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
          {filters.map((filter) => <UsersFilter key={filter.name} filterData={filter} />)}
        </div>
      </section>

      <section>
        {!!visibleUsers.length && <UsersTable users={visibleUsers} />}
      </section>
    </div>
  );
}

export default App;
