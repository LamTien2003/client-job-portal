import Header from "@/components/Admin/Header/Header";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import { RootState } from "@/store/store";
import { removeToken } from "@/utils/storage";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";


function AdminLayout() {
    const currentUser = useSelector((state: RootState) => state.user.user)
    const navigate = useNavigate()

    if(currentUser && currentUser?.role !== 'user') {
        removeToken()
        navigate('/login')
    }

    return (
        !currentUser ? 'checking...' :
        <div className="bg-[#f0f3f6]">
            <Header />
            <div className="flex mt-[100px]">
                <Sidebar />
                <Outlet />
            </div>
            {/* <div onClick={handleLogout}>Logout</div> */}
        </div>
    );
}

export default AdminLayout;