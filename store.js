import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './src/slices/authenticationSlice';
import inputsValidationReducer from './src/slices/inputsValidationSlice';

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    validation: inputsValidationReducer,
  },
});
