import Company from '@/types/Company';
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

export const companyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCompanies: builder.query<ResponseApi<Company[]>, ParamsGetAllJob>({
            query: (arg) => {
                const query = buildQueryString(arg);
                return {
                    url: `company?${query && query}`,
                };
            },  
            providesTags(result) {
                if (result?.data?.data) {
                    const final = [
                        ...result.data.data.map(({ id }) => ({ type: 'Companies' as const, id })),
                        { type: 'Companies' as const, id: 'LIST' },
                    ];
                    return final;
                }
                return [{ type: 'Companies' as const, id: 'LIST' }];
            },
        }),
        getCompany: builder.query<ResponseApi<Company>, string>({
            query: (id) => `company/${id}`,
            providesTags: () => [{ type: 'Companies' as const, id: ''}]
        })
    }),
});

export const {
    useGetCompaniesQuery,
    useGetCompanyQuery
} = companyApiSlice;
