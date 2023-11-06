import { useState } from "react";
import { ArrowAdmin, CategoryAdmin, JobAdmin, ProfileAdmin, SettingAdmin, StatisticsAdmin, UserAdmin } from "@/components/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import images from "@/assets/images";
type SidebarProps = {
    isActiveSidebar: boolean
}
function Sidebar(props: SidebarProps) {

    const myURL = window.location.href
    const page = new URL(myURL)

    const [active, setActive] = useState<any>(() => {
        if(page.pathname === '/admin') {
            return 'statistics'
        } else if(page.pathname === '/admin/users') {
            return 'user'
        } else if(page.pathname === '/admin/jobs') {
            return 'job'
        } else if(page.pathname === '/admin/categories') {
            return 'category'
        } else if(page.pathname === '/admin/profile') {
            return 'profile'
        } else if(page.pathname === '/admin/setting') {
            return 'setting'
        } else {
            return
        }
    })

    const toggleActiveStyle = (id: string) => {
        if(id === active) {
            return 'flex items-center text-content-title fill-[#40189D] bg-[#EEE] rounded-l-[50px] py-[16px] pl-5 relative'
        }   else {
            return 'flex items-center text-white fill-white py-[18px] pl-5 relative'
        }
    }

    return (
        props.isActiveSidebar ? (
            <div className=" w-[300px] h-[100vh] text-white bg-[#40189D] rounded-r-[10px] mr-[30px] duration-300 left-0 fixed">
                <Link className=" flex items-center justify-center w-[150px] h-[120px] mx-auto" to={'/'}><img src={images.logo.logoWhite} /></Link>
                <div className=" pl-4">
                    <Link to={'/admin'} className={toggleActiveStyle('statistics')} onClick={() => setActive('statistics')}>
                        <div className=" w-5 h-5">
                            <StatisticsAdmin />
                        </div>
                        <p className=" pl-3">Thống kê</p>
                        <div className=" right-2 absolute">
                            <ArrowAdmin />
                        </div>
                    </Link>
                    <Link to={'/admin/users'} className={toggleActiveStyle('user')} onClick={() => setActive('user')}>
                        <div className=" w-5 h-5 ">
                            <UserAdmin />
                        </div>
                        <p className=" pl-3">Người dùng</p>
                        <div className=" right-2 absolute">
                            <ArrowAdmin />
                        </div>
                    </Link>
                    <Link to={'/admin/jobs'} className={toggleActiveStyle('job')} onClick={() => setActive('job')}>
                        <div className=" w-5 h-5 ">
                            <JobAdmin />
                        </div>
                        <p className=" pl-3">Công việc</p>
                        <div className="  right-2 absolute">
                            <ArrowAdmin />
                        </div>
                    </Link>
                    <Link to={'/admin/categories'} className={toggleActiveStyle('category')} onClick={() => setActive('category')}>
                        <div className=" w-5 h-5 ">
                            <CategoryAdmin />
                        </div>
                        <p className=" pl-3">Danh mục</p>
                        <div className="  right-2 absolute">
                            <ArrowAdmin />
                        </div>
                    </Link>
                    <Link to={'/admin/profile'} className={toggleActiveStyle('profile')} onClick={() => setActive('profile')}>
                        <div className=" w-5 h-5">
                            <ProfileAdmin />
                        </div>
                        <p className=" pl-3">Profile</p>
                    </Link>
                    <Link to={'/admin/setting'} className={toggleActiveStyle('setting')} onClick={() => setActive('setting')}>
                        <div className=" w-5 h-5">
                            <SettingAdmin />
                        </div>
                        <p className=" pl-3">Cài đặt</p>
                    </Link>
                </div>
            </div>
        ) : (
            <div className=" w-[60px] h-[100vh] text-white bg-[#40189D] rounded-r-[10px] mr-[30px] duration-300 left-0 fixed">
                <Link to={'/'} className=" flex items-center justify-center w-full h-5 my-[55px]">
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
                <Link to={'/admin'} className={toggleActiveStyle('statistics')} onClick={() => setActive('statistics')}>
                    <div className=" w-5 h-5">
                        <StatisticsAdmin />
                    </div>
                </Link>
                <Link to={'/admin/users'} className={toggleActiveStyle('user')} onClick={() => setActive('user')}>
                    <div className=" w-5 h-5 ">
                        <UserAdmin />
                    </div>
                </Link>
                <Link to={'/admin/jobs'} className={toggleActiveStyle('job')} onClick={() => setActive('job')}>
                    <div className=" w-5 h-5 ">
                        <JobAdmin />
                    </div>
                </Link>
                <Link to={'/admin/categories'} className={toggleActiveStyle('category')} onClick={() => setActive('category')}>
                    <div className=" w-5 h-5 ">
                        <CategoryAdmin />
                    </div>
                </Link>
                <Link to={'/admin/profile'} className={toggleActiveStyle('profile')} onClick={() => setActive('profile')}>
                    <div className=" w-5 h-5">
                        <ProfileAdmin />
                    </div>
                </Link>
                <Link to={'/admin/setting'} className={toggleActiveStyle('setting')} onClick={() => setActive('setting')}>
                    <div className=" w-5 h-5">
                        <SettingAdmin />
                    </div>
                </Link>
            </div>
        )
        
    );
}

export default Sidebar;