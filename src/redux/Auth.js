import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'react-toastify';

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    loginSuccess: (state, action) => {
      const { user } = action.payload;
      sessionStorage.setItem('user', JSON.stringify(user));
      toast.success(`Successful login. Welcome, ${user.name}`);
      return {
        ...state,
        user,
        isAuthenticated: true,
      };
    },
    loginFailure: (state) => {
      sessionStorage.removeItem('user');
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    },
    logout: (state) => {
      sessionStorage.removeItem('user');
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
