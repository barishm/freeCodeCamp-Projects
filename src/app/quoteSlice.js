import { createSlice } from '@reduxjs/toolkit';

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    currentQuote: { quote: '', author: '' },
    accentColor: '#4FC1FF',
  },
  reducers: {
    setAccentColor: (state, action) => {
      state.accentColor = action.payload;
    },
    setCurrentQuote: (state, action) => {
      state.currentQuote = action.payload;
    },
  },
});

export const { setAccentColor, setCurrentQuote } = quoteSlice.actions;

export default quoteSlice.reducer;