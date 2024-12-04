// import React from 'react';
// import User from '../../types/User';
// import './UsersTable.scss';



// // Old version of UsersTable - Now using UsersTableUI



// export const UsersTable: React.FC<{ users: User[] }> = ({ users }) => {
//   const headings = ['name', 'username', 'email', 'phone'];

//   return (
//     <table className='users-table'>
//       <thead>
//         <tr className='users-table__row users-table__row--head'>
//           {headings.map((heading) => {
//             return <th className='users-table__header' key={heading}>{heading}</th>;
//           })}
//         </tr>
//       </thead>

//       {users.length && (
//         <tbody>
//           {users.map((user: User) => {
//             return (
//               <tr className='users-table__row' key={user.id}>
//                 {headings.map((heading) => {
//                   return <td className='users-table__data' key={heading}>{user[heading]}</td>;
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       )}
//     </table>
//   );
// };

// export default UsersTable;
