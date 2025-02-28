import { loginApi } from '@/shared/api/base-api';
import type { AuthResponse, LoginRequest } from './types';

export const authApi = loginApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
