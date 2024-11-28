import React, { useEffect } from 'react';
import TableBody from '@mui/material/TableBody';
import { Box } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import User from '../../types/User';
import TableUser from '../../types/TableUser';
import { useDispatch, useSelector } from 'react-redux';
import { setField, setOption } from '../../features/sort.ts';
import { SortField } from '../../types/SortFields.ts';
import { SortOption } from '../../types/SortOption.ts';
import { RootState } from '../../app/store';
import { sortUsers } from '../../features/users.ts';
import * as P from './UsersTableUI.parts.tsx';
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

export const UsersTableUI: React.FC<{ users: User[] }> = ({ users }) => {
  const dispatch = useDispatch();

  // Sort state
  const { field: sortField, option: sortOption } = useSelector((state: RootState) => state.sort.value);
  
    // Actively sort users
    useEffect(() => {
      dispatch(sortUsers({sortField, sortOption}))
    }, [dispatch, sortField, sortOption]);

  const tableUsersData: TableUser[] = users.map((user: User) => {
    return {
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
    };
  });

  const sortArrowSrc = (arrowDirection: ArrowDirection, heading: SortField) => {
    let baseURL = process.env.REACT_APP_PRODUCTION_URL;

    if (window.location.href.includes('localhost')) {
      baseURL = process.env.REACT_APP_DEVELOPMENT_URL;
    }

    if (!baseURL) {
      console.error('Could not extract environment variables.')
    }

    let arrowType = `${arrowDirection}-arrow`;
    
    // If this is the active column
    if (sortField === heading) {
      if (arrowDirection === ArrowDirection.Up && sortOption === SortOption.Asc) {
        arrowType = `${arrowDirection}-arrow-active`;
      } else if (arrowDirection === ArrowDirection.Down && sortOption === SortOption.Desc) {
        arrowType = `${arrowDirection}-arrow-active`;
      }
    }
    
    return `${baseURL}/icons/${arrowType}.svg`;
  };

  const handleButtonSortClick = (heading: SortField, sortingOrder: SortOption) => () => {
    if (heading === sortField && sortingOrder === sortOption) {
      dispatch(setField(SortField.None));
    } else {
      dispatch(setField(heading as SortField));
      dispatch(setOption(sortingOrder));
    }
  }

  return (
        <P.UsersTable
          className="users-table"
          aria-label="simple table"
        >
          <TableHead>
            <P.TableHeadRow>
              {headings.map((heading) => (
                <P.TableHeadCell
                  className="table-cell users-table__cell users-table__cell--heading"
                  key={heading}
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
                </P.TableHeadCell>
              ))}
            </P.TableHeadRow>
          </TableHead>
          <TableBody>
            {tableUsersData.map((row: TableUser) => (
              <P.TableRow
                key={row.name}
              >
                <P.TableCell className="users-table__cell">
                  {row.name}
                </P.TableCell>
                <P.TableCell className="users-table__cell">
                  {row.username}
                </P.TableCell>
                <P.TableCell className="users-table__cell">
                  {row.email}
                </P.TableCell>
                <P.TableCell className="users-table__cell">
                  {row.phone}
                </P.TableCell>
              </P.TableRow>
            ))}
          </TableBody>
        </P.UsersTable>
  );
};
