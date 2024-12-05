import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Filters } from "../types/Filters";

export interface FiltersState {
  value: Filters
}

const initialState: FiltersState = {
  value: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.value.name = action.payload;
    },

    setUsername: (state, action: PayloadAction<string>) => {
      state.value.username = action.payload;
    },

    setEmail: (state, action: PayloadAction<string>) => {
      state.value.email = action.payload;
    },

    setPhone: (state, action: PayloadAction<string>) => {
      state.value.phone = action.payload;
    },

    resetFilters: () => initialState,
  }
});

export const { setName, setUsername, setEmail, setPhone, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
