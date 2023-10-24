import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Setting } from "@/components/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import path from "path";

function Sidebar() {
    const currentUser = useSelector((state: RootState) => state.user.user)
    
    const navigate = useNavigate()

    const myURL = window.location.href
    const page = new URL(myURL)
    console.log(page.pathname)

    const [active, setActive] = useState<string>('text-primary-100 italic bg-white rounded-lg border border-[#EFEEEB] fill-primary-100 ')
    const [statistics, setStatistics] = useState(() => {
        if(page.pathname === '/admin')  return true
        return false
    })
    const [manageUser, setManageUser] = useState(() => {
        if(page.pathname === '/admin/users') return true
        return false
    })
    const [manageJob, setManageJob] = useState(() => {
        if(page.pathname === '/admin/jobs') return true
        return false
    })
    const [manageCategory, setManageCategory] = useState(() => {
        if(page.pathname === '/admin/categories') return true
        return false
    })

    const handleActive = (arg: string) => {
        if(arg === 'statistics') {
            setStatistics(true)
            setManageUser(false)
            setManageJob(false)
            setManageCategory(false)
            navigate('/admin')
        }
        if(arg === 'manageUser') {
            setStatistics(false)
            setManageUser(true)
            setManageJob(false)
            setManageCategory(false)
            navigate('/admin/users')
        }
        if(arg === 'manageJob') {
            setStatistics(false)
            setManageUser(false)
            setManageJob(true)
            setManageCategory(false)
            navigate('/admin/jobs')
        }
        if(arg === 'manageCategory') {
            setStatistics(false)
            setManageUser(false)
            setManageJob(false)
            setManageCategory(true)
            navigate('/admin/categories')
        }
    }
    return (
        <div className=" w-3/12 h-[100%] flex flex-col pt-4 pr-6 pl-10 fixed bg-[#f0f3f6]">
            <div className=" flex flex-col items-start after:w-full after:border-t after:border-[#E0E0E0]">
                <div className={"flex items-center pr-5 pl-5 pt-2 pb-2 mb-6 font-medium cursor-pointer " + (statistics && active)} onClick={() => handleActive('statistics')}>
                    <div className=" mr-3">
                        <Setting />
                    </div>
                    Thống kê
                </div>
                <div className={"flex items-center pr-5 pl-5 pt-2 pb-2 mb-6 font-medium cursor-pointer " + (manageUser && active)} onClick={() => handleActive('manageUser')}>
                    <div className=" mr-3">
                        <Setting />
                    </div>
                    Quản Lí Người Dùng
                </div>
                <div className={"flex items-center pr-5 pl-5 pt-2 pb-2 mb-6 font-medium cursor-pointer " + (manageJob && active)} onClick={() => handleActive('manageJob')}>
                    <div className=" mr-3">
                        <Setting />
                    </div>
                    Quản Lí Công Việc
                </div>
                <div className={"flex items-center pr-5 pl-5 pt-2 pb-2 mb-6 font-medium cursor-pointer " + (manageCategory && active)} onClick={() => handleActive('manageCategory')}>
                    <div className=" mr-3">
                        <Setting />
                    </div>
                    Quản Lí Danh Mục
                </div>
            </div>
            <div className=" flex flex-col mt-6">
                <div className=" flex items-center pr-5 pl-5 pt-2 pb-2 mb-6 font-medium cursor-pointer  ">
                    <div className=" mr-3">
                        <Setting />
                    </div>
                    Profile
                </div>
                <div className=" flex items-center pr-5 pl-5 pt-2 pb-2 mb-6 font-medium cursor-pointer  ">
                    <div className=" mr-3">
                        <Setting />
                    </div>
                    Settings
                </div>
            </div>
            <div className=" flex items-center justify-between absolute bottom-36 left-16 right-28">
                <img className=" w-9 h-9 rounded-full" src={'https://res.cloudinary.com/dcv1op3hs/image/upload/v1691749443/users/c2hdowxqvcy4vw2iewgy.jpg'} />
                <p className=" text-content-title font-medium mr-6">{currentUser?.lastName + ' ' + currentUser?.firstName}</p>
                <div className=" flex items-center justify-center p-1 bg-[#EBEBEB] rounded-md">
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;