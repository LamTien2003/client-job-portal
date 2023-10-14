import { useGetCurrentUserQuery } from "@/services/usersApiSlice";
import { RootState } from "@/store/store";
import { removeToken } from "@/utils/storage";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Admin() {
    const currentUser = useSelector((state: RootState) => state.user.user)
    const navigate = useNavigate()

    if(currentUser && currentUser?.role !== 'user') {
        removeToken()
        navigate('/login')
    }

    const handleLogout = () => {
        removeToken()
        navigate('/login')
    }
    
    return (
        !currentUser ? 'checking...' :
        <>
            <div>admin page</div>
            <div onClick={handleLogout}>Logout</div>
        </>

        
    );
}

export default Admin;