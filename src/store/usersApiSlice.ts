import { buildCreateApi } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/',
            keepUnusedDataFor: 15
        })
    })
})

export const {
    useGetUsersQuery
} = usersApiSlice