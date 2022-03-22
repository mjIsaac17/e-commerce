import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isLoading: false,
  error: ''
};

const userReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.currentUser = action.payload;
    },
    loginSetError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload || '';
    }
  }
});

export const { loginStart, loginSuccess, loginSetError } = userReducer.actions;
export default userReducer.reducer;
