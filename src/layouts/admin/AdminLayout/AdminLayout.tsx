import Header from "@/components/Admin/Header/Header";
import Sidebar from "@/components/Admin/Sidebar/Sidebar";
import { RootState } from "@/store/store";
import { removeToken } from "@/utils/storage";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";


function AdminLayout() {
    const currentUser = useSelector((state: RootState) => state.user.user)
    const navigate = useNavigate()

    const [activeSidebar, setActiveSidebar] = useState<boolean>(true)

    if(currentUser && currentUser?.role !== 'user') {
        removeToken()
        navigate('/login')
    }

    return (
        !currentUser ? 'checking...' :
        <div className="flex bg-[#EEE]">
            <Sidebar isActiveSidebar={activeSidebar} />
            <div className={" w-full flex flex-col duration-300 pr-[30px] " + (activeSidebar ? 'pl-[330px]' : 'pl-[90px]')}>
                <Header activeSidebar={setActiveSidebar} />
                <Outlet />
            </div>
            {/* <div onClick={handleLogout}>Logout</div> */}
        </div>
    );
}

export default AdminLayout;