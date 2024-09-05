import React from 'react';
import User from '../../types/User';
import './UsersTable.css';

export const UsersTable: React.FC<{ users: User[] }> = ({ users }) => {
  const headings = ['id', 'name', 'username', 'email', 'phone'];

  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading) => {
            return <th key={heading}>{heading}</th>;
          })}
        </tr>
      </thead>

      {users.length && (
        <tbody>
          {users.map((user: User) => {
            return (
              <tr key={user.id}>
                {headings.map((heading) => {
                  return <td key={heading}>{user[heading]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};

export default UsersTable;
