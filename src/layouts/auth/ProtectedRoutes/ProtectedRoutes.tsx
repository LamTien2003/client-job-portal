import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { useGetCurrentUserQuery } from '@/services/usersApiSlice';
import { removeToken } from '@/utils/storage';
import { hideLoading, showLoading } from '@/store/uiSlice';

const ProtectedRoutes = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, isLoading, isFetching, isError, error } = useGetCurrentUserQuery(undefined, {
        refetchOnMountOrArgChange: 500,
    });

    useEffect(() => {
        if (isLoading) {
            dispatch(showLoading());
            return;
        }
        if (isError && !isFetching) {
            alert((error as any)?.data?.msg);
            removeToken();
            dispatch(hideLoading());
            navigate('/login');
            return;
        }
        dispatch(hideLoading());
    }, [data, dispatch, navigate, isLoading, isFetching, isError, error]);

    return data && !isFetching && !isLoading && <Outlet />;
};

export default ProtectedRoutes;
