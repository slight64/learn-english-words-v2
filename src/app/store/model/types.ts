import type { AuthState } from '@/entities/auth/model/types';
import type { baseApi, loginApi } from '@/shared/api/base-api';

export interface RootState {
  auth: AuthState;
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
  [loginApi.reducerPath]: ReturnType<typeof loginApi.reducer>;
}
