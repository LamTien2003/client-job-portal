import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    useEffect(() => {
        //   Xử lý auth tại đây
    }, []);

    return <Outlet />;
};

export default ProtectedRoutes;
