// import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { authOperations } from 'redux/auth/auth-operations';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export default function Contacts() {
  // const [contacts, setContats] = useState();

  const dispatch = useDispatch();
  const getContacts = createAsyncThunk('', async () => {
    try {
      const { data } = await axios.get('/contacts');
      // console.log(data);
      // setContats(data);
      return data;
    } catch (error) {}
  });

  // const xxx = dispatch(getContacts);
  // console.log(xxx);

  // console.log(contacts);

  return (
    <div>
      <button type="button" onClick={() => dispatch(getContacts())}>
        {' '}
        get your contacts
      </button>
    </div>
  );
}
