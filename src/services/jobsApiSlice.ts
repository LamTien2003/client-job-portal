import Job from '@/types/Job';
import { apiSlice } from './apiSlice';

import { ResponseApi } from '@/types/ResponseApi';
import { buildQueryString } from '@/utils/helper';

interface ParamsGetAllJob {
    q?: string;
    page?: number;
    limit?: number;
    ['salary[gte]']?: number;
    ['salary[lte]']?: number;
    ['skillsRequire[in]']?: string[];
    sort?: string;
}
export const jobsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getJobs: builder.query<ResponseApi<Job[]>, ParamsGetAllJob>({
            query: (arg) => {
                const query = buildQueryString(arg);
                return {
                    url: `job?${query && query}`,
                };
            },
            providesTags(result) {
                if (result?.data?.data) {
                    const final = [
                        ...result.data.data.map(({ id }) => ({ type: 'Jobs' as const, id })),
                        { type: 'Jobs' as const, id: 'LIST' },
                    ];
                    return final;
                }
                return [{ type: 'Jobs' as const, id: 'LIST' }];
            },
        }),

        createJob: builder.mutation<ResponseApi<Job>, Omit<Job, 'id'>>({
            query(body) {
                try {
                    return {
                        url: 'job',
                        method: 'POST',
                        body,
                    };
                } catch (error: any) {
                    throw error.message;
                }
            },
            invalidatesTags: (_result, error, _body) => (error ? [] : [{ type: 'Jobs', id: 'LIST' }]),
        }),
    }),
});

export const { useGetJobsQuery, useCreateJobMutation } = jobsApiSlice;
