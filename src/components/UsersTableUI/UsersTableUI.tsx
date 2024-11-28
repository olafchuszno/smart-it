import React, { useEffect } from 'react';
import User from '../../types/User';
import TableUser from '../../types/TableUser';
import { useDispatch, useSelector } from 'react-redux';
import { setField, setOption } from '../../features/sort.ts';
import { SortField } from '../../types/SortFields.ts';
import { SortOption } from '../../types/SortOption.ts';
import { RootState } from '../../app/store';
import { sortUsers } from '../../features/users.ts';
import * as P from './UsersTableUI.parts.tsx';
import getSortArrowSrc from '../../utils/getSortArrowSrc.ts';
import { tableHeadings } from '../../constants/tableHeadings.ts';
import './UsersTableUI.scss';
import { SortArrowDirection } from '../../types/SortArrowDirection.ts';

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
          aria-label="simple table"
        >
          <thead>
            <P.TableHeadRow>
              {tableHeadings.map((heading) => (
                <P.TableHeadCell
                  key={heading}
                >
                  {heading}                    
                    <P.ButtonsContainer>
                      <P.SortingButton
                        onClick={handleButtonSortClick(heading, SortOption.Asc)}
                    >
                        <P.ButtonImage
                          src={getSortArrowSrc(SortArrowDirection.Up, heading, sortField, sortOption)}
                          alt="Up arrow"
                        />
                      </P.SortingButton>
                      <P.SortingButton
                        onClick={handleButtonSortClick(heading, SortOption.Desc)}
                      >
                        <P.ButtonImage
                          src={getSortArrowSrc(SortArrowDirection.Down, heading, sortField, sortOption)}
                          alt="Down arrow"
                        />
                      </P.SortingButton>
                  </P.ButtonsContainer>
                </P.TableHeadCell>
              ))}
            </P.TableHeadRow>
          </thead>
          <tbody>
            {tableUsersData.map((row: TableUser) => (
              <P.TableRow
                key={row.name}
              >
                <P.TableCell>
                  {row.name}
                </P.TableCell>
                <P.TableCell>
                  {row.username}
                </P.TableCell>
                <P.TableCell>
                  {row.email}
                </P.TableCell>
                <P.TableCell>
                  {row.phone}
                </P.TableCell>
              </P.TableRow>
            ))}
          </tbody>
        </P.UsersTable>
  );
};
