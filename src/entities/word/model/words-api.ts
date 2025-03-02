import { baseApi } from '@/shared/api/base-api';
import { z } from 'zod';
import { Word } from './types';

const WordDtoSchema = z.object({
  id: z.string(),
  word: z.string(),
  translation: z.string(),
  createdAt: z.string(),
});

export const wordsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getWords: build.query<Word[], void>({
      query: () => '/words',
      providesTags: ['Words', { type: 'Words', id: 'LIST' }],
      transformErrorResponse: (res: unknown) =>
        WordDtoSchema.array().parse(res),
    }),
    getOneWord: build.query<Word, string>({
      query: (id) => `/words/${id}`,
      providesTags: ['Words', { type: 'Words', id: 'LIST' }],
      transformErrorResponse: (res: unknown) => WordDtoSchema.parse(res),
    }),
    createWord: build.mutation({
      query: (data) => ({
        url: '/words',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Words'],
    }),
    deleteWord: build.mutation({
      query: (id) => ({
        url: `/words/${id}`,
        method: 'DELETE',
        invalidatesTags: [{ type: 'Words', id: 'LIST' }],
      }),
      invalidatesTags: ['Words'],
    }),
    editWord: build.mutation({
      query: (data) => ({
        url: `/words/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Words'],
    }),
  }),
  overrideExisting: true,
});
