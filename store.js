import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './src/slices/authenticationSlice';
import inputsValidationReducer from './src/slices/inputsValidationSlice';
import perksReducer from './src/slices/perksSlice';

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    validation: inputsValidationReducer,
    perks: perksReducer,
  },
});
