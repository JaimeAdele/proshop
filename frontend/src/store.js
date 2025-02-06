import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  // devTools: process.env.NODE_ENV !== 'production' // enable devtools only in development
  devTools: true
});

export default store;