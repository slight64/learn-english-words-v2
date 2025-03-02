import { authSlice } from '@/entities/auth/model/slice';
import { baseApi, loginApi } from '@/shared/api/base-api';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './types';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, loginApi.middleware),
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export { store };
