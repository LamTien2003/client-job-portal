import { apiSlice } from './apiSlice';

import { ResponseApi } from '@/types/ResponseApi';

export const utilsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSkills: builder.query<ResponseApi<string[]>, void>({
            query: () => `utils/getSkills`,
            providesTags: () => [{ type: 'Skills' as const, id: 'LIST' }],
        }),
    }),
});

export const { useGetSkillsQuery } = utilsApiSlice;
