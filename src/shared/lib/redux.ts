import { extraArgument, store } from '@/app/store/store';
import { ThunkAction, UnknownAction } from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<R = void> = ThunkAction<
  R,
  RootState,
  typeof extraArgument,
  UnknownAction
>;
