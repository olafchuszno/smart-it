import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { Box, styled } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import User from '../../types/User';
import TableUser from '../../types/TableUser';
import './UsersTableUI.scss';

const headings = ['Name', 'Username', 'Email', 'Phone'];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#86bf2b',
    color: theme.palette.common.white,
  },
  fontSize: 20,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const UsersTableUI: React.FC<{ users: User[] }> = ({ users }) => {
  const tableUsersData: TableUser[] = users.map((user: User) => {
    return {
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone
    }
  })

  return (
    <Box sx={{ width: '100%', overflowX: 'auto' }}>
      <TableContainer component={Paper}>
      <Table className="users-table" sx={{ width: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headings.map(heading => (
            <StyledTableCell className="users-table__cell users-table__cell--heading" key={heading} align="left">
                {heading}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableUsersData.map((row: TableUser) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="users-table__cell" align="left">
                {row.name}
              </TableCell>
              <TableCell className="users-table__cell" align="left">{row.username}</TableCell>
              <TableCell className="users-table__cell" align="left">{row.email}</TableCell>
              <TableCell className="users-table__cell" align="left">{row.phone}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </Box>

  );
}