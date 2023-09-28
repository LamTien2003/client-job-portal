import { Outlet } from 'react-router-dom';

const Content = () => {
    return (
        <div className="h-96 w-full rounded-md border-[1px] border-primary-40">
            <Outlet />
        </div>
    );
};

export default Content;
