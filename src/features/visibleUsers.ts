import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortField } from '../types/SortFields.ts';
import { SortOption } from '../types/SortOption.ts';
import User from '../types/User';
import { Filters } from '../types/Filters';
import filterUsersUtil from '../utils/usersFilter/usersFilter.ts';

export interface VisibleUsersState {
  value: User[];
  filteredUsers: User[];
  allUsers: User[];
}

const initialState: VisibleUsersState = {
  value: [],
  filteredUsers: [],
  allUsers: [],
};

export const visibleUsersSlice = createSlice({
  name: 'users',

  initialState,

  reducers: {
    setVisibleUsers: (state, action: PayloadAction<User[]>) => {
      state.value = action.payload;
      // state.filteredUsers = action.payload;
      state.allUsers = action.payload;
    },

    filterUsers: (state, action: PayloadAction<Filters>) => {
      state.filteredUsers = state.allUsers.filter((user) => filterUsersUtil(user, action.payload))
    },

    sortUsers: (state, action: PayloadAction<{ sortField, sortOption }>) => {
      // If NOT sorting, show all users
      if (action.payload.sortField === SortField.None) {
        state.value = [...state.filteredUsers];
        return;
      }

      // If sorting, sort by field according to sorting option (ASC/DESC)
      state.value = [...state.filteredUsers].sort((userA: User, userB: User) => {
        if (action.payload.sortOption === SortOption.Asc) {
          return userA[action.payload.sortField].localeCompare(userB[action.payload.sortField]);
        } else {
          return userB[action.payload.sortField].localeCompare(userA[action.payload.sortField]);
        }
      });
    },
  },
});

export const { setVisibleUsers, filterUsers, sortUsers } = visibleUsersSlice.actions;

export default visibleUsersSlice.reducer;
