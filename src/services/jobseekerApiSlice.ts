import { apiSlice } from './apiSlice';

import { ResponseApi } from '@/types/ResponseApi';
import JobSeeker from '@/types/JobSeeker';

export const jobseekerApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        changeMe: builder.mutation<ResponseApi<JobSeeker>, JobSeeker>({
            query(body) {
                try {
                    return {
                        url: 'jobseeker/changeMe',
                        method: 'PATCH',
                        body,
                    };
                } catch (error: any) {
                    throw error.message;
                }
            },
            invalidatesTags: (_result, error, _body) =>
                error
                    ? []
                    : [
                          { type: 'JobSeeker', id: 'LIST' },
                          { type: 'Users' as const, id: 'CURRENT' },
                      ],
        }),
    }),
});

export const { useChangeMeMutation } = jobseekerApiSlice;
