import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faUser, faBell } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useGetCurrentUserQuery } from '@/services/usersApiSlice';
import images from '@/assets/images';
import { useEffect, useRef, useState } from 'react';
import { BellIcon, Logout, MesNot, Profile, Setting } from '../Icons';
import { removeToken } from '@/utils/storage';
import User from '@/types/User';

const Header = () => {
    const { data, isLoading, isError } = useGetCurrentUserQuery();
    const [menu, setMenu] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    const navigate = useNavigate();

    const menuRef = useRef<HTMLUListElement>(null);
    const handleLogout = () => {
        setUser(null);
        removeToken();
        navigate('/login');
    };

    useEffect(() => {
        let handler = (e: any) => {
            if (!menuRef.current?.contains(e.target)) {
                setMenu(false);
            }
        };

        document.addEventListener('mousedown', handler);
    });

    useEffect(() => {
        if (data?.data?.data && !isLoading && !isError) {
            setUser(data?.data?.data);
        }
    }, [data?.data?.data, !isLoading, !isError]);

    return (
        <header className="w-[90%] h-[86px] m-auto grid grid-cols-12 gap-4 text-[15px]">
            <div className=" w-full col-span-2 pt-4 ">
                <img className=" w-32 " src="/src/assets/images/logo.png" alt="" />
            </div>

            {/* MENU CHÍNH */}
            <div className="col-span-7 flex justify-between items-center gap-4">
                <div className=" w-[100%] grid grid-cols-7">
                    <div className="text-center relative group">
                        <NavLink to="/" className="the_a_menu">
                            Home
                            <FontAwesomeIcon icon={faAngleDown} className="ml-1 translate-y-1" />
                        </NavLink>
                        <div className="absolute left-0 w-[200px] bg-menu-bg text-footer-color-hover shadow-md rounded-lg mt-2 p-4 hidden z-20 group-hover:block">
                            {/* Thêm nội dung menu con tại đây */}
                            <a href="#" className="block">
                                Submenu Item 1
                            </a>
                            <a href="#" className="block">
                                Submenu Item 2
                            </a>
                            {/* ... và các mục khác */}
                        </div>
                    </div>

                    <div className="text-center">
                        <NavLink to="/job-listing" className="the_a_menu">
                            Find Jobs
                            <FontAwesomeIcon icon={faAngleDown} className="ml-1 translate-y-1" />
                        </NavLink>
                    </div>

                    <div className="text-center">
                        <NavLink to="/company-listing" className="the_a_menu">
                            Company
                            <FontAwesomeIcon icon={faAngleDown} className="ml-1 translate-y-1" />
                        </NavLink>
                    </div>

                    <div className="text-center">
                        <NavLink to="/blogGird" className="the_a_menu">
                            Blog
                            <FontAwesomeIcon icon={faAngleDown} className="ml-1 translate-y-1" />
                        </NavLink>
                    </div>

                    <div className="text-center">
                        <a href="#" className="the_a_menu">
                            Contact
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-span-3 flex justify-end items-center">
                {user ? (
                    <ul className="w-[100%] grid grid-cols-5 gap-8 items-center" ref={menuRef}>
                        <li className="text-footer-color-hover cursor-pointer">
                            <div className="pt-[10px] w-10 h-10  border rounded-full bg-gray-200 translate-x-20 translate-y-1">
                                <div className="primary-icon text-[20px] translate-x-[12px]">
                                    <BellIcon />
                                </div>

                                <div className="w-4 h-4 border rounded-full bg-footer-color-hover text-white text-[10px] pl-[4px] translate-x-6 -translate-y-9">
                                    5
                                </div>
                            </div>
                        </li>
                        <li className="text-footer-color-hover cursor-pointer">
                            <div className="pt-[10px] w-10 h-10 border rounded-full bg-gray-200 translate-x-20 translate-y-1">
                                <div className="primary-icon text-[20px] translate-x-[12px] translate-y-1">
                                    <MesNot />
                                </div>
                                <div className="w-4 h-4 border rounded-full bg-footer-color-hover text-white text-[10px] pl-[4px] translate-x-6 -translate-y-7">
                                    5
                                </div>
                            </div>
                        </li>
                        <li
                            className=" z-50 relative translate-x-20 translate-y-1 cursor-pointer"
                            onClick={() => setMenu(!menu)}
                        >
                            <img
                                className=" w-9 h-9 rounded-full"
                                src={
                                    'https://res.cloudinary.com/dcv1op3hs/image/upload/v1691749443/users/c2hdowxqvcy4vw2iewgy.jpg'
                                }
                            />
                            {/* <img src={data?.data?.data?.photo} /> */}
                            {menu ? (
                                <div className=" flex flex-col absolute top-[60px] right-1">
                                    <Link
                                        to={'profile'}
                                        className=" w-60 flex items-center text-content-title font-semibold rounded-sm bg-white pl-5 pt-3 pb-3 mb-0.5 "
                                    >
                                        <div className=" primary-icon pr-2">
                                            <Profile />
                                        </div>
                                        My Profile
                                    </Link>
                                    <Link
                                        to={'/setting'}
                                        className=" w-60 flex items-center text-content-title font-semibold rounded-sm bg-white pl-5 pt-3 pb-3 mb-0.5 "
                                    >
                                        <div className=" primary-icon pr-2">
                                            <Setting />
                                        </div>
                                        Settings
                                    </Link>
                                    <div
                                        className=" w-60 flex items-center text-content-title font-semibold rounded-sm bg-white pl-5 pt-3 pb-3 mb-0.5 "
                                        onClick={handleLogout}
                                    >
                                        <div className=" primary-icon pr-2">
                                            <Logout />
                                        </div>
                                        Logout
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                        </li>
                    </ul>
                ) : (
                    <ul className="w-[100%] grid grid-cols-5 gap-8">
                        <li className="text-footer-color-hover">
                            <div className="pt-[10px] w-10 h-10  border rounded-full bg-gray-200 translate-x-3 translate-y-1">
                                <FontAwesomeIcon icon={faBell} className="text-[20px] translate-x-[10px]" />

                                <div className="w-4 h-4  border rounded-full bg-footer-color-hover text-white text-[10px] pl-[4px] translate-x-6 -translate-y-9">
                                    5
                                </div>
                            </div>
                        </li>
                        <li className="col-span-2">
                            <div className="w-[133px] h-[45px] rounded-md text-center pt-[10px] font-medium  border-solid border  border-footer-color-hover hover:bg-footer-color-hover hover:text-white">
                                <NavLink to={'/login'}>
                                    <FontAwesomeIcon icon={faUser} className="mr-[5px]" />
                                    Sign In
                                </NavLink>
                            </div>
                        </li>
                        <li className="col-span-2">
                            <div className="w-[133px] h-[45px] rounded-md text-center pt-[10px] font-medium   bg-footer-color-hover hover:bg-black text-white">
                                <NavLink to="/post-job">
                                    Post Job
                                    <FontAwesomeIcon icon={faBriefcase} className="ml-[5px]" />
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                )}
            </div>
        </header>
    );
};

export default Header;
