import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setAuthentication } = authenticationSlice.actions;
export default authenticationSlice.reducer;
