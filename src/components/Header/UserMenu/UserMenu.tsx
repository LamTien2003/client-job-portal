import { BellIcon, Logout, MesNot, Profile, Setting } from "@/components/Icons";
import User from "@/types/User";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";

type Props = {
    user: User
    logout: () => void
}
function UserMenu(props: Props) {
    const {user: currentUser, logout: handleLogout} = props

    const [dropDownMenu, setDropDownMenu] = useState<boolean>(false)
    const [dropDownNot, setDropDownNot] = useState<boolean>(false)
    const [sideMenu, setSideMenu] = useState<boolean>(false)

    const menuRef = useRef<HTMLDivElement>(null)
    const notificationRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let handler = (e:any) => {
            if(!menuRef.current?.contains(e.target)) {
                setDropDownMenu(false)
            }
        }
        document.addEventListener('mousedown', handler)
    }, [dropDownMenu])
    
    useEffect(() => {
        let handler = (e:any) => {
            if(!notificationRef.current?.contains(e.target)) {
                setDropDownNot(false)
            }
        }
        document.addEventListener('mousedown', handler)
    }, [dropDownNot])
    
    return (
        <div className=' w-[158px] flex items-center justify-between lg:w-[200px] tb:w-[200px] mb:w-[200px]'>
            <div className=" flex items-center justify-center w-[34px] h-[34px] bg-[#eff1f0] border border-gray-400 rounded-full cursor-pointer relative">
                <div className=" fill-primary-100">
                    <MesNot />
                </div>
                <div className=" flex items-center justify-center w-[12px] h-[12px] text-[9px] text-white bg-primary-100 rounded-full top-0 right-0 absolute">5</div>
            </div>
            <div ref={notificationRef} className=" flex items-center justify-center w-[34px] h-[34px] bg-[#eff1f0] border border-gray-400 rounded-full cursor-pointer relative" onClick={() => setDropDownNot(!dropDownNot)}>
                <div className=" fill-primary-100">
                    <BellIcon />
                </div>
                <div className=" flex items-center justify-center w-[12px] h-[12px] text-[9px] text-white bg-primary-100 rounded-full top-0 right-0 absolute">5</div>
                {dropDownNot && (
                    <div className=" w-[278.4px] flex flex-col bg-white rounded shadow-md top-[63px] right-0 absolute cursor-default">
                        <p className=" text-center text-content-title font-semibold p-[15px]">5 Notifications</p>
                        <div className=" flex items-start border-t border-[#eee] p-[10px]">
                            <img className=" w-[30px] h-[30px] rounded-full mr-[10px]" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/notifacion-1.png" />
                            <div className=" flex flex-col">
                                <Link className=" text-sm text-content-title font-medium mb-1 duration-300 cursor-pointer hover:text-primary-100" to={'/'}>Your application has accepted in 5 vacancies.</Link>
                                <div className=" flex items-center">
                                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/clock-1.svg" />
                                    <p className=" text-xs text-content-text ml-1">10 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div className=" flex items-start border-t border-[#eee] p-[10px]">
                            <img className=" w-[30px] h-[30px] rounded-full mr-[10px]" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/notifacion-1.png" />
                            <div className=" flex flex-col">
                                <Link className=" text-sm text-content-title font-medium mb-1 duration-300 cursor-pointer hover:text-primary-100" to={'/'}>Your application has accepted in 5 vacancies.</Link>
                                <div className=" flex items-center">
                                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/clock-1.svg" />
                                    <p className=" text-xs text-content-text ml-1">10 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div className=" flex items-start border-t border-[#eee] p-[10px]">
                            <img className=" w-[30px] h-[30px] rounded-full mr-[10px]" src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/company-logo/notifacion-1.png" />
                            <div className=" flex flex-col">
                                <Link className=" text-sm text-content-title font-medium mb-1 duration-300 cursor-pointer hover:text-primary-100" to={'/'}>Your application has accepted in 5 vacancies.</Link>
                                <div className=" flex items-center">
                                    <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/clock-1.svg" />
                                    <p className=" text-xs text-content-text ml-1">10 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <p className=" text-center text-content-title font-semibold border-t border-[#eee] p-[15px] duration-300 cursor-pointer hover:text-primary-100">5 Notifications</p>
                    </div>
                )}
            </div>
            <div ref={menuRef} className=" flex items-center justify-center w-[40px] h-[40px] relative" onClick={() => setDropDownMenu(!dropDownMenu)}>
                <img className=" w-full h-full rounded-full cursor-pointer" src={currentUser.photo} />

                {dropDownMenu && (
                    <div className=' flex flex-col shadow-md top-[66px] right-0 absolute'>
                        <Link to={'profile'} className=' group w-60 flex items-center text-content-title font-semibold rounded-sm bg-white pl-5 py-3 mb-0.5 cursor-default '>
                            <div className=' primary-icon pr-2'>
                                <Profile />
                            </div>
                            <p className=" duration-300 cursor-pointer group-hover:text-primary-100">My Profile</p>
                        </Link>
                        <Link to={'/setting'} className=' group w-60 flex items-center text-content-title font-semibold rounded-sm bg-white pl-5 py-3 mb-0.5 cursor-default '>
                            <div className=' primary-icon pr-2'>
                                <Setting />
                            </div>
                            <p className=" duration-300 cursor-pointer group-hover:text-primary-100">Settings</p>
                        </Link>
                        <div className=' group w-60 flex items-center text-content-title font-semibold rounded-sm bg-white pl-5 py-3 mb-0.5 ' onClick={handleLogout}>
                            <div className=' primary-icon pr-2'>
                                <Logout />
                            </div>
                            <p className=" duration-300 cursor-pointer group-hover:text-primary-100">Logout</p>
                        </div>
                    
                    </div>
                )}
            </div>
            
            <div className=" hidden lg:block tb:block mb:block" onClick={() => setSideMenu(!sideMenu)}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <SideMenu
                sideMenu={sideMenu} 
                setSideMenu={setSideMenu} 
            />
            
        </div>
    );
}

export default UserMenu;