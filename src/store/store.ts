import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
