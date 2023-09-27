import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCurrentToken, selectCurrentEmail, selectCurrentRole } from "@/store/authSlice";

const ProtectedRoutes = (props:any) => {
    
    const token = useSelector(selectCurrentToken)
    const email = useSelector(selectCurrentEmail)
    const role = useSelector(selectCurrentRole)
    const location = useLocation()

    console.log(token, role, props.allowedRoles)

    return (
        token && role === props.allowedRoles
            ? <Outlet />
            : email
                ? <Navigate to={'/unauthorized'} state={{ from: location }} replace />
                : <Navigate to={'/login'} state={{ from: location }} replace />
    )
};

export default ProtectedRoutes;
