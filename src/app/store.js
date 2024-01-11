import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './quoteSlice';
import { api } from './api'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
  reducer: {
    quote: quoteReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware),
});

export default store;

setupListeners(store.dispatch)