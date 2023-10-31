
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
import images from '@/assets/images';

const Header = () => {
    const currentUser = useSelector((state: RootState) => state.user.user)
    const [logout] = useLogoutMutation()

    const navigate = useNavigate();

    const token = getToken()

    const handleLogout = () => {
        removeToken()
        logout()
        navigate('/login')
    }

    return (
        <>
            <div className=' flex w-full items-center text-content-title bg-white px-[50px] xl:px-[30px] fixed z-20'>
                <div className=' border-r border-[#f1f1f1] '>
                    <img className='w-[140px] mr-[95px] xl:w-[100px] xl:mr-[65px] lg:py-2.5' src={images.logo.logoBlack} />
                </div>

                <div className=' w-full flex items-center justify-between z-20 lg:justify-end tb:justify-end mb:justify-end'>
                    <MainMenu />
                    {currentUser && token ? <UserMenu user={currentUser} logout={handleLogout} /> : <NonLoginMenu />}
                </div>
            </div>
            <div className=' w-px h-[84px] xl:h-[56px] lg:h-[68.21px]'></div>
        </>
    );
};

export default Header;
