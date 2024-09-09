import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Sort } from "../types/Sort";
import { SortField } from "../types/SortFields.ts";
import { SortOption } from "../types/SortOption.ts";

export interface SortState {
  value: Sort
}

const initialState: SortState = {
  value: {
    field: SortField.None,
    option: SortOption.Asc,
  },
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setField: (state, action: PayloadAction<SortField>) => {
      state.value.field = action.payload;
    },

    setOption: (state, action: PayloadAction<SortOption>) => {
      state.value.option = action.payload;
    },

    clearField: (state) => {
      state.value.field = SortField.None;
    },
  }
});

export const { setField, setOption, clearField } = sortSlice.actions;

export default sortSlice.reducer;
