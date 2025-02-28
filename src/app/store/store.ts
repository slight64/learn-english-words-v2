import { baseApi } from '@/shared/api/baseApi';
import { configureStore } from '@reduxjs/toolkit';

export const extraArgument = {};

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument } }).concat(
      baseApi.middleware
    ),
});
