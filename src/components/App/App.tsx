import React from 'react'
import './App.css';
import { useSelector } from 'react-redux';
import {RootState} from '../../app/store'
import User from '../../types/User';

const App = () => {
  const headings = ['id', 'name', 'username', 'email', 'phone'];

  const users: User[] = useSelector((state: RootState) => state.users.value);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {headings.map((heading) => {
              return (<th>
                heading
                </th>)
            })}
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => {
            return (<tr>
              {headings.map((heading) => {
                return (<td>
                  {user[heading]}
                </td>)
              })}
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
