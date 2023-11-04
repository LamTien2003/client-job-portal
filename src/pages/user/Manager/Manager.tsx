import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { hideLoading, showLoading } from '@/store/uiSlice';
import { useGetCurrentUserQuery } from '@/services/usersApiSlice';
import { isJobSeeker as checkJobSeeker } from '@/utils/helper';
const Manager = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data: currentUserResponse, isLoading } = useGetCurrentUserQuery();

    useEffect(() => {
        if (isLoading) {
            dispatch(showLoading());
            return;
        }

        const currentUser = currentUserResponse?.data.data;
        const isJobSeeker = checkJobSeeker(currentUser);
        if (isJobSeeker) {
            navigate('/profile/jobseeker');
            dispatch(hideLoading());
            return;
        }
        navigate('/profile/company');
        dispatch(hideLoading());
    }, [currentUserResponse, isLoading, dispatch, navigate]);

    return (
        <div className="bg-content-bg min-h-screen">
            <div className="max-w-7xl mx-auto flex justify-between gap-8 py-10">
                <Sidebar />
                <div className="w-full">{!isLoading && currentUserResponse && <Outlet />}</div>
            </div>
        </div>
    );
};

export default Manager;
