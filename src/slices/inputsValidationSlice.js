import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
};

export const inputsValidationSlice = createSlice({
  name: 'validation',
  initialState,
  reducers: {
    setEmailError: (state, action) => {
      state.email = action.payload;
    },

    setPasswordError: (state, action) => {
      state.password = action.payload;
    },

    setConfirmPasswordError: (state, action) => {
      state.confirmPassword = action.payload;
    },

    setFirstNameError: (state, action) => {
      state.firstName = action.payload;
    },

    setLastNameError: (state, action) => {
      state.lastName = action.payload;
    },

    setPhoneNumberError: (state, action) => {
      state.phoneNumber = action.payload;
    },

    setAllErrors: (state, action) => {
      state.email = action.payload;
      state.password = action.payload;
      state.confirmPassword = action.payload;
      state.firstName = action.payload;
      state.lastName = action.payload;
      state.phoneNumber = action.payload;
    },
  },
});

export const {
  setEmailError,
  setPasswordError,
  setConfirmPasswordError,
  setFirstNameError,
  setLastNameError,
  setPhoneNumberError,
  setAllErrors,
} = inputsValidationSlice.actions;
export default inputsValidationSlice.reducer;
