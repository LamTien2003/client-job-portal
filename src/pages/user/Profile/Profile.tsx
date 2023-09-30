import { Route, Routes } from 'react-router-dom';
import Content from './Content';
import Sidebar from './Sidebar';
import MyProfile from './MyProfile/MyProfile';

const Profile = () => {
    return (
        <div className="bg-content-bg min-h-screen">
            <div className="max-w-7xl mx-auto flex justify-between gap-8 py-10">
                <Sidebar />
                
            </div>
        </div>
    );
};

export default Profile;
