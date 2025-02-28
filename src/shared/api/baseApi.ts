import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3000';
const loginUrl = 'https://reqres.in/api';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Words'],
  endpoints: () => ({}),
});

export const loginApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: loginUrl }),
  tagTypes: ['Login'],
  endpoints: () => ({}),
});
