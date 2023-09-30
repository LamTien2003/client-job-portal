import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import authReducer from './authSlice'
import userReducer from './userSlice';
import { apiSlice } from './apiSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
