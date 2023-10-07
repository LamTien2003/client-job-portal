import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ProtectedRoutes = (props: any) => {
    const dispatch = useDispatch()
    const location = useLocation()

    return (
        <Outlet />
    );
};

export default ProtectedRoutes;
