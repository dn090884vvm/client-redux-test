import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations } from './contacts-operations';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getContact.fulfilled](state, action) {
      console.log(action.payload);

      //   action.payload.map(el => state.contacts.push(el));
      state.contacts = action.payload;

      //   return { ...state, contacts: [...state.contacts, action.payload] };
      //   state.contacts.push(action.payload);
      //   state.contacts = [...state.contacts, action.payload];
    },
    // addContact: (state, action) => {},
    // deleteContact: (state, action) => {},
    [contactsOperations.filter]: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default contactsSlice.reducer;
