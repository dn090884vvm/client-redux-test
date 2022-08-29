import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
    isLoggedIn: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, actions) {},
  },
});

export default authSlice.reducer;
