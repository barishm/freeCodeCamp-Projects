import { createSlice } from '@reduxjs/toolkit';

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    quotes: [],
    currentQuote: { quote: '', author: '' },
    accentColor: '#4FC1FF',
  },
  reducers: {
    setQuotes: (state, action) => {
      state.quotes = action.payload;
    },
    setAccentColor: (state, action) => {
      state.accentColor = action.payload;
    },
    setCurrentQuote: (state, action) => {
      state.currentQuote = action.payload;
    },
  },
});

export const { setQuotes, setAccentColor, setCurrentQuote } = quoteSlice.actions;

export default quoteSlice.reducer;