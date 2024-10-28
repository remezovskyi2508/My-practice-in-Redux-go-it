import { createSlice } from '@reduxjs/toolkit';
import ContactsData from '../data/contactsData.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: ContactsData,
  },
  reducers: {
    addContact(state, action) {
      return state.action;
    },
    deleteContact(state, action) {
      return state.action;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
