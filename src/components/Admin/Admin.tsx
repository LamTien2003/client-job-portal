import { removeToken } from "@/utils/storage";
import { Link, useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate()
    
    return (
        <>
            <div>admin page</div>
            <div onClick={() => navigate('/edit')}>go to edit page</div>
            <Link to={'/admin/user'}>userlist</Link>
            <div onClick={() => removeToken()}>Logout</div>
        </>
        
    );
}

export default Admin;