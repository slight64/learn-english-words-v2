import { baseApi } from '@/shared/api/base-api';
import type { Word } from '../model/types';

export const wordsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWords: builder.query<Word[], void>({
      query: () => '/words',
      providesTags: ['Words'],
    }),
    deleteWord: builder.mutation<void, number>({
      query: (id) => ({
        url: `/words/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Words'],
    }),
  }),
});

export const { useGetWordsQuery, useDeleteWordMutation } = wordsApi;
