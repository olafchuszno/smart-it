import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import users from '../features/users';

const reducer = combineReducers({
  users
});

const store = configureStore({
  reducer
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

