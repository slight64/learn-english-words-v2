import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import type { AuthResponse, User } from './types';

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }: PayloadAction<AuthResponse>) => {
        state.token = payload.token;
        localStorage.setItem('token', payload.token);
      }
    );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
