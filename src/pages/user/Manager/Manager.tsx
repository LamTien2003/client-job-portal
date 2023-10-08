import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const Manager = () => {
    return (
        <div className="bg-content-bg min-h-screen">
            <div className="max-w-7xl mx-auto flex justify-between gap-8 py-10">
                <Sidebar />
                <div className='w-full'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Manager;
