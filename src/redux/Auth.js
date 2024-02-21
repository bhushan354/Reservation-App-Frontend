import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies

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
