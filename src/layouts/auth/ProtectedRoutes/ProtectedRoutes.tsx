import { useLocation, Outlet, Navigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const ProtectedRoutes = (props:any) => {
    const {auth} = useAuth() 
    const location = useLocation()

    console.log(props.allowedRoles?.includes(auth?.roles))

    return (
        props.allowedRoles?.includes(auth?.roles)
            ? <Outlet />
            : auth?.email
                ? <Navigate to={'/unauthorized'} state={{ from: location }} replace />
                : <Navigate to={'/login'} state={{ from: location }} replace />
    )
};

export default ProtectedRoutes;
