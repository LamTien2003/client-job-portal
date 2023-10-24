import { apiSlice } from './apiSlice';

import { ResponseApi } from '@/types/ResponseApi';
import JobSeeker, { JobApplicate } from '@/types/JobSeeker';

export const jobseekerApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        JobseekerChangeMe: builder.mutation<ResponseApi<JobSeeker>, JobSeeker>({
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
                          { type: 'JobSeeker', id: 'JobSeeker' },
                          { type: 'Users' as const, id: 'CURRENT' },
                      ],
        }),
        getMyApplication: builder.query<ResponseApi<JobApplicate[]>, void>({
            query: () => `jobseeker/myApplication`,
            providesTags: () => [{ type: 'JobSeeker' as const, id: 'LIST' }],
        }),
    }),
});

export const { useJobseekerChangeMeMutation, useGetMyApplicationQuery } = jobseekerApiSlice;
