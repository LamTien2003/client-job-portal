
import { Link, useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '@/utils/storage';
import { useLogoutMutation } from '@/services/authApiSlice';
import MainMenu from './MainMenu/MainMenu';
import UserMenu from './UserMenu/UserMenu';
import NonLoginMenu from './NonLoginMenu/NonLoginMenu';
import images from '@/assets/images';
import { useGetCurrentUserQuery } from '@/services/usersApiSlice';

const Header = () => {
    const {data, isLoading, isError} = useGetCurrentUserQuery()
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
                <Link to={'/'} className=' border-r border-[#f1f1f1] mr-[95px] '>
                    <img className='w-[140px] py-[10px] xl:w-[100px] xl:mr-[65px] lg:py-2.5' src={images.logo.logoBlack} />
                </Link>

                <div className=' w-full flex items-center justify-between z-20 lg:justify-end tb:justify-end mb:justify-end'>
                    <MainMenu />
                    {!isLoading && !isError && data?.data?.data && token ? <UserMenu user={data?.data?.data} logout={handleLogout} /> : <NonLoginMenu />}
                </div>
            </div>
            <div className=' w-px h-[84px] xl:h-[56px] lg:h-[68.21px]'></div>
        </>
    );
};

export default Header;
