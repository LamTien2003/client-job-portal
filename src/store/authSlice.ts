import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {email: null, token: null, role: null},
    reducers: {
        setCredentials: (state, action) => {
            const { email, accessToken, role } = action.payload
            state.email = email
            state.token = accessToken
            state.role = role
        },
        logOut: (state, action) => {
            state.email = null
            state.token = null
            state.role = null
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentEmail = (state:any) => state.auth.email
export const selectCurrentToken = (state:any) => state.auth.token
export const selectCurrentRole = (state:any) => state.auth.role