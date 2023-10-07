import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { useGetCurrentUserQuery } from '@/services/usersApiSlice';
import { setCurrentUser } from '@/store/userSlice';
import { RootState } from '@/store/store';
import { removeToken } from '@/utils/storage';

import User from '@/types/User';

const ProtectedRoutes = () => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const { data, isLoading, isFetching, isError, error } = useGetCurrentUserQuery(undefined, {
        refetchOnMountOrArgChange: 500,
    });
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (data?.data?.data) {
            const user = data.data.data;
            dispatch(setCurrentUser(user as User));
        }

        if (isError && !isFetching && !isLoading) {
            alert((error as any)?.data?.msg);
            removeToken();
        }
    }, [data, dispatch, isLoading, isFetching, currentUser, isError, error]);

    return !currentUser && !data && !isFetching && !isLoading ? <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedRoutes;
