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
        addCategory: builder.mutation<ResponseApi<Category>, {categoryName: string}>({
            query: (body) => {
                return {
                    url: `categoryJob`,
                    method: 'POST',
                    body
                }
            },
            invalidatesTags: (result, error) => (error ? [] : [{type: 'Category', id: 'LIST'}])
        }),
        changeCategory: builder.mutation<ResponseApi<Category>, Category>({
            query: (body) => {
                return {
                    url: `categoryJob/${body.id}`,
                    method: 'PATCH',
                    body: {categoryName: body.categoryName, isHotCategory: body.isHotCategory}
                }
            },
            invalidatesTags: (result, error) => (error ? [] : [{type: 'Category', id: 'LIST'}])
        }),
        deleteCategory: builder.mutation<ResponseApi<Category>, string>({
            query: (id) => {
                return {
                    url: `categoryJob/${id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: (result, error) => (error ? [] : [{type: 'Category', id: 'LIST'}])
        })
    }),
});

export const {
    useGetCategoriesQuery,
    useAddCategoryMutation,
    useChangeCategoryMutation,
    useDeleteCategoryMutation
} = categoriesApiSlice;
