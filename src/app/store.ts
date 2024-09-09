import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import users from '../features/users.ts';
import filters from '../features/filters.ts';
import sort from '../features/sort.ts';

const reducer = combineReducers({
  users,
  filters,
  sort
});

const store = configureStore({
  reducer
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

