import { removeToken } from "@/utils/storage";
import { Link, useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate()

    const handleLogout = () => {
        removeToken()
    }
    return (
        <>
            <div>admin page</div>
            <div onClick={() => navigate('/edit')}>go to edit page</div>
            <Link to={'/admin/user'}>userlist</Link>
            <div onClick={handleLogout}>Logout</div>
        </>
        
    );
}

export default Admin;