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
import { useDispatch, useSelector } from 'react-redux';
import { setField, setOption } from '../../features/sort.ts';
import { SortField } from '../../types/SortFields.ts';
import { SortOption } from '../../types/SortOption.ts';
import { RootState } from '../../app/store';
import './UsersTableUI.scss';

const headings: SortField[] = [
  SortField.Name,
  SortField.Username,
  SortField.Email,
  SortField.Phone,
];

enum ArrowDirection {
  Up = 'up',
  Down = 'down',
}

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
  const dispatch = useDispatch();

  // Sort state
  const { field, option } = useSelector((state: RootState) => state.sort.value);

  const tableUsersData: TableUser[] = users.map((user: User) => {
    return {
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
    };
  });

  const sortArrowSrc = (arrowDirection: ArrowDirection, heading: SortField) => {
    let baseURL = process.env.REACT_APP_DEPLOYMENT_URL;

    if (window.location.href.includes('localhost')) {
      baseURL = process.env.REACT_APP_DEVELOPMENT_URL;
    }

    let arrowType = `${arrowDirection}-arrow`;
    
    // If this is the active column
    if (field === heading) {
      if (arrowDirection === ArrowDirection.Up && option === SortOption.Asc) {
        arrowType = `${arrowDirection}-arrow-active`;
      } else if (arrowDirection === ArrowDirection.Down && option === SortOption.Desc) {
        arrowType = `${arrowDirection}-arrow-active`;
      }
    }
    
    return `${baseURL}/icons/${arrowType}.svg`;
  };

  const handleButtonSortClick = (heading: SortField, sortingOrder: SortOption) => () => {
    if (heading === field && sortingOrder === option) {
      dispatch(setField(SortField.None));
    } else {
      dispatch(setField(heading as SortField));
      dispatch(setOption(sortingOrder));
    }
  }

  return (
    <Box sx={{ width: '100%', overflowX: 'auto' }}>
      <TableContainer component={Paper}>
        <Table
          className="users-table"
          sx={{ width: '100%' }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              {headings.map((heading) => (
                <StyledTableCell
                  className="table-cell users-table__cell users-table__cell--heading"
                  key={heading}
                  align="left"
                >
                  <span className='th-container'>
                    {heading}
                    <span className="sorting-buttons table-cell__buttons">
                      <button
                        className="sorting-buttons__button empty-button"
                        onClick={handleButtonSortClick(heading, SortOption.Asc)}
                      >
                        <img
                          className="sorting-buttons__image"
                          src={sortArrowSrc(ArrowDirection.Up, heading)}
                          alt="Up arrow"
                        />
                      </button>
                      <button
                        className="sorting-buttons__button empty-button"
                        onClick={handleButtonSortClick(heading, SortOption.Desc)}
                      >
                        <img
                          height={5}
                          width={5}
                          className="sorting-buttons__image"
                          src={sortArrowSrc(ArrowDirection.Down, heading)}
                          alt="Down arrow"
                        />
                      </button>
                    </span>
                  </span>
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
                <TableCell className="users-table__cell" align="left">
                  {row.username}
                </TableCell>
                <TableCell className="users-table__cell" align="left">
                  {row.email}
                </TableCell>
                <TableCell className="users-table__cell" align="left">
                  {row.phone}
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
