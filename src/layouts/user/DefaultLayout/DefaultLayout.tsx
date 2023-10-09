import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    console.log(currentUser);
    return (
        <div className="">
            <Header />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
