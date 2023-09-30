import JobSeeker from '@/types/JoobSeeker';
import { apiSlice } from './apiSlice';
import Company from '@/types/Company';
import { ResponseApi } from '@/types/ResponseApi';
import { buildQueryString } from '@/utils/helper';

type MixinUser = JobSeeker | Company;

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<ResponseApi<MixinUser[]>, { q?: string; page?: number; limit?: number }>({
            query: (arg) => {
                const query = buildQueryString(arg);
                return {
                    url: `user?${query && query}`,
                };
            },
            providesTags(result) {
                if (result?.data?.data) {
                    const final = [
                        ...result.data.data.map(({ id }) => ({ type: 'Users' as const, id })),
                        { type: 'Users' as const, id: 'LIST' },
                    ];
                    return final;
                }
                return [{ type: 'Users' as const, id: 'LIST' }];
            },
        }),
    }),
});

export const { useGetUsersQuery } = usersApiSlice;
