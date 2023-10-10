import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { isCompany, isJobSeeker } from '@/utils/helper';

const DefaultLayout = () => {
    const currentUser = useSelector((state: RootState) => state.user.user);

    if (isJobSeeker(currentUser)) {
        // Do something... maybe return jsx
    } else if (isCompany(currentUser)) {
        // Do something... maybe return jsx
    }

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
