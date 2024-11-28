import { configureStore } from '@reduxjs/toolkit';
import users from '../features/users.ts';
import filters from '../features/filters.ts';
import sort from '../features/sort.ts';

const store = configureStore({
  reducer: { users, filters, sort },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
