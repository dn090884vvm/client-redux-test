// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// const dispatch = useDispatch();

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getContact = createAsyncThunk('contacts/getcontact', async () => {
  try {
    const { data } = await axios.get('/contacts');
    console.log('this is data', data);

    return data;
  } catch (error) {}
});

export const contactsOperations = {
  getContact: getContact,
};
// const getContacts = () => async dispatch => {
//   dispatch(fetchContactsrequest());
//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message));
//   }
// };
// const addContact = (name, number) => dispatch => {
//   const newContact = {
//     name: name,
//     number: number,
//   };

//   dispatch(addContactRequest());

//   axios
//     .post('/contacts', newContact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error.message)));
// };

// const deleteContact = contactId => dispatch => {
//   dispatch(deleteContactrequest());

//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(deleteContactSuccess(contactId)))
//     .catch(error => dispatch(deleteContactError(error.message)));
// };

// const toggleComplited = () => async dispatch => {
//   const update = { completed };

//   dispatch(toggleComplitedRequest());

//   axios
//     .patch(`/contacts/${id}`, update)
//     .then(({ data }) => dispatch(toggleComplitedSuccess(data)))
//     .catch(error => dispatch(toggleComplited(error.message)));
// };

// const contactsOperations = {
//   getContacts: getContacts,
//   addContact: addContact,
//   deleteContact: deleteContact,
//   toggleComplited: toggleComplited,
// };

// export default contactsOperations;
