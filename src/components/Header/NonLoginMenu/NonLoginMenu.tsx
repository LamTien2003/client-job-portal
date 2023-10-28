
import { BellIcon, User, Vali } from "@/components/Icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu/SideMenu";

function NonLoginMenu() {
    const [sideMenu, setSideMenu] = useState<boolean>(false)
    const [dropDownMenu, setDropDownMenu] = useState<boolean>(false)
    const [dropDownNot, setDropDownNot] = useState<boolean>(false)

    const notificationRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let handlerClickOutside = (e:any) => {
            if(!notificationRef.current?.contains(e.target)) {
                setDropDownNot(false)
            }
        }
        document.addEventListener('mousedown', handlerClickOutside)
    }, [dropDownNot])

    return (
        <div className=" w-[367.14px] flex items-center justify-between xl:w-[330px] tb:w-[70px] ">
            <div ref={notificationRef} className=" flex items-center justify-center w-[34px] h-[34px] bg-[#eff1f0] rounded-full cursor-pointer relative" onClick={() => setDropDownNot(!dropDownNot)}>
                <div className=" fill-primary-100">
                    <BellIcon />
                </div>
                <div className=" flex items-center justify-center w-[12px] h-[12px] text-[9px] text-white bg-primary-100 rounded-full top-0 right-0 absolute">5</div>
                {dropDownNot && (
                    <div className=" w-[278.4px] flex flex-col bg-white rounded shadow-md top-[63px] left-0 absolute cursor-default">
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
            <Link to={'/login'} className=" group flex items-center justify-center border border-[#dfe9e5] rounded-[5px] py-[9px] px-[28px] duration-500 cursor-pointer hover:bg-primary-100 hover:text-white xl:text-sm xl:px-[20px] lg:px-[30px] tb:hidden mb:hidden">
                <div className=" mr-2 duration-500 group-hover:fill-white">
                    <User />
                </div>
                <p>Sign In</p>
            </Link>
            <Link to={'/post-job'} className=" group flex items-center justify-center text-white bg-primary-100 rounded-[5px] py-[9px] px-[26px] duration-500 cursor-pointer hover:bg-black hover:text-white xl:text-sm xl:px-[20px] lg:px-[30px] tb:hidden mb:hidden">
                <p>Post Job</p>
                <div className=" ml-2 duration-500 fill-white xl:ml-2 xl:mr-0">
                    <Vali />
                </div>
            </Link>
            <div className=" hidden lg:block tb:block mb:block" onClick={() => setSideMenu(!sideMenu)}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <SideMenu 
                sideMenu={sideMenu} 
                dropDownMenu={dropDownMenu} 
                setSideMenu={setSideMenu} 
                setDropDownMenu={setDropDownMenu} 
            />
            
        </div>
    );
}

export default NonLoginMenu;