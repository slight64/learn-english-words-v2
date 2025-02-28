import { authSlice } from '@/entities/auth/model/slice';
import { baseApi, loginApi } from '@/shared/api/base-api';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState as AppRootState } from './types';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, loginApi.middleware),
});

export type RootState = AppRootState;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store };
