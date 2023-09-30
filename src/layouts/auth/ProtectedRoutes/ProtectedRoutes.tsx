import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getToken, setToken } from '@/utils/storage';

const ProtectedRoutes = (props: any) => {
    // const token = useSelector(selectCurrentToken)
    // const tokenFromSession = getToken()
    // const email = useSelector(selectCurrentEmail)
    // const role = useSelector(selectCurrentRole)
    // const location = useLocation()

    // console.log('token from redux: ' + token)
    // console.log('token from session: ' + tokenFromSession)

    return (
        // tokenFromSession || token && role === props.allowedRoles
        //     ? <Outlet />
        //     : email
        //         ? <Navigate to={'/unauthorized'} state={{ from: location }} replace />
        //         : <Navigate to={'/login'} state={{ from: location }} replace />
        <Outlet />
    );
};

export default ProtectedRoutes;
