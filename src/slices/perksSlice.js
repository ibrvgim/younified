import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'New & Local',
};

export const perksSlice = createSlice({
  name: 'perks',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = perksSlice.actions;
export default perksSlice.reducer;
