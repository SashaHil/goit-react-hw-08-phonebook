import { createSlice } from '@reduxjs/toolkit';

const FiltersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = FiltersSlice.actions;
export const filtersReducer = FiltersSlice.reducer;
