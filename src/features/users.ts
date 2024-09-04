import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import User from "../types/User";

export interface UsersState {
  value: User[]
}

const initialState: UsersState = {
  value: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.value = action.payload;
    }
  }
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
