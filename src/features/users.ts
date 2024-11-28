import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../types/User';

export enum UsersStatus {
  Initial,
  Fetched,
  Fetching,
  Error,
}

export interface UsersState {
  value: User[];
  status: UsersStatus;
}

const initialState: UsersState = {
  value: [],
  status: UsersStatus.Initial,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.value = action.payload;
      state.status = UsersStatus.Fetched;
    },
    setUsersError: (state) => {
      state.status = UsersStatus.Error
    },
    setUsersLoading: (state) => {
      state.status = UsersStatus.Fetching;
    },
  },
});

export const { setUsers, setUsersError, setUsersLoading } = usersSlice.actions;

export default usersSlice.reducer;
