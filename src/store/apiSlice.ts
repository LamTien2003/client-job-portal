import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '@/store/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl:'https://job-portal-server-e9q1.onrender.com/',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if(token) {
            headers.set('authorization', 'Bearer' + token)
        }
        return headers
    }
})  

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if(result?.error?.originalStatus === 403) {
        console.log('sending refresh token')

        const refreshResult = await baseQuery('auth/refreshToken', api, extraOptions)
        console.log(refreshResult)
        if(refreshResult?.data) {
            const email = api.getState().auth.email
            api.dispatch(setCredentials({ ...refreshResult.data, email }))
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})