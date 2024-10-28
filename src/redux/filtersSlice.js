import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      return state;
    },
    selectNameFilter(state, action) {
      return state;
    },
  },
});

export const { addContact, deleteContact } = filtersSlice.actions;

export default filtersSlice.reducer;
