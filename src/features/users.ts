import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../types/User';
import { SortField } from '../types/SortFields.ts';
import { SortOption } from '../types/SortOption.ts';
import filterUserUtil from '../utils/usersFilter/usersFilter.ts';
import { Filters } from '../types/Filters';

export enum UsersStatus {
  Initial,
  Fetched,
  Fetching,
  Error,
}

export interface UsersState {
  allUsers: User[];
  filteredUsers: User[],
  sortedUsers: User[],
  status: UsersStatus;
}

const initialState: UsersState = {
  allUsers: [],
  filteredUsers: [],
  sortedUsers: [],
  status: UsersStatus.Initial,
};

export const usersSlice = createSlice({
  name: 'users',

  initialState,

  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      if (!Array.isArray(action.payload)) {
        console.warn('Fetched users are of incompatible type');

        return;
      };

      state.allUsers = action.payload;
      console.log('all users is now:', action.payload);
      state.filteredUsers = action.payload;
      state.sortedUsers = action.payload;

      state.status = UsersStatus.Fetched;
    },

    setUsersError: (state) => {
      state.status = UsersStatus.Error
    },

    setUsersLoading: (state) => {
      state.status = UsersStatus.Fetching;
    },

    filterUsers: (state, action: PayloadAction<Filters>) => {
      state.filteredUsers = state.allUsers.filter((user) => filterUserUtil(user, action.payload))
    },

    sortUsers: (state, action: PayloadAction<{ sortField: SortField, sortOption: SortOption }>) => {
      // If NOT sorting, show all users
      if (action.payload.sortField === SortField.None) {
        state.sortedUsers = [...state.filteredUsers];

        return;
      }

      // If sorting, sort by field according to sorting option (ASC/DESC)
      state.sortedUsers = [...state.filteredUsers].sort((userA: User, userB: User) => {
        const userAKeyValue: string = userA[(action.payload.sortField as keyof User)].toString();

        const userBKeyValue: string = userB[action.payload.sortField as keyof typeof userA].toString();

        if (action.payload.sortOption === SortOption.Asc) {
          return userAKeyValue.localeCompare(userBKeyValue);
        } else {
          return userBKeyValue.localeCompare(userAKeyValue);
        }
      });
    },
  },
});

export const { setUsers, setUsersError, setUsersLoading, filterUsers, sortUsers } = usersSlice.actions;

export default usersSlice.reducer;
