
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getToken, removeToken } from '@/utils/storage';
import { useLogoutMutation } from '@/services/authApiSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import MainMenu from './MainMenu/MainMenu';
import UserMenu from './UserMenu/UserMenu';
import NonLoginMenu from './NonLoginMenu/NonLoginMenu';
import Loader from '../Loader/Loader';

const Header = () => {
<<<<<<< HEAD
    const currentUser = useSelector((state: RootState) => state.user.user)
    const [logout] = useLogoutMutation()
=======
    const { data, isLoading, isError } = useGetCurrentUserQuery();
    const [menu, setMenu] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
>>>>>>> 640c38993c877283ee994fbaf37d021a4b1d85d5

    const navigate = useNavigate();

<<<<<<< HEAD
    const token = getToken()

    const handleLogout = () => {
        removeToken()
        logout()
        navigate('/login')
    }

=======
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

>>>>>>> 640c38993c877283ee994fbaf37d021a4b1d85d5
    return (
        <>
            <div className=' flex w-full items-center text-content-title bg-white px-[50px] xl:px-[30px] fixed z-20'>
                <div className=' border-r border-[#f1f1f1] '>
                    <img className='w-[140px] mr-[95px] xl:w-[100px] xl:mr-[65px] lg:py-2.5' src='/src/assets/images/logo.png' alt='/src/assets/images/logo.png' />
                </div>

                <div className=' w-full flex items-center justify-between z-20 lg:justify-end'>
                    <MainMenu />
                    {currentUser && token ? <UserMenu user={currentUser} logout={handleLogout} /> : <NonLoginMenu />}
                </div>
            </div>
<<<<<<< HEAD
            <div className=' w-px h-[84px] xl:h-[56px] lg:h-[68.21px]'></div>
        </>
=======

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
>>>>>>> 640c38993c877283ee994fbaf37d021a4b1d85d5
    );
};

export default Header;
