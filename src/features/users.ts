import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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

// useEffect(() => {
//   dispatch(setUsersLoading());

//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error();
//       }

//       return response.json();
//     })
//     .then((users: User[]) => {
//       dispatch(setUsers(users));
//     })
//     .catch(() => {
//       dispatch(setUsersError());
//     });
// }, [dispatch]);

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const users = await response.json() as User[];

  return users;
})

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

    resetUsers: () => initialState
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.rejected, (state) => {  
      state.status = UsersStatus.Error;
    });

    builder.addCase(fetchUsers.pending, (state) => {  
      state.status = UsersStatus.Fetching;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.allUsers = action.payload;
      state.filteredUsers = action.payload;
      state.sortedUsers = action.payload;

      state.status = UsersStatus.Fetched;
    });
  }
});

export const { setUsers, setUsersError, setUsersLoading, filterUsers, sortUsers, resetUsers } = usersSlice.actions;

export default usersSlice.reducer;
