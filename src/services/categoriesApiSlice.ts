import Category from '@/types/Category';
import { apiSlice } from './apiSlice';

import { ResponseApi } from '@/types/ResponseApi';

export const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<ResponseApi<Category[]>, void>({
            query: () => {
                return {
                    url: 'categoryJob',
                };
            },
            providesTags(result) {
                if (result?.data?.data) {
                    const final = [
                        ...result.data.data.map(({ id }) => ({ type: 'Category' as const, id })),
                        { type: 'Category' as const, id: 'LIST' },
                    ];
                    return final;
                }
                return [{ type: 'Category' as const, id: 'LIST' }];
            },
        }),
    }),
});

export const { useGetCategoriesQuery } = categoriesApiSlice;
