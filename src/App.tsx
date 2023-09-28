import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/layouts/user/DefaultLayout/DefaultLayout.tsx';
import Home from './pages/user/Home/Home';
import ProtectedRoutes from './layouts/auth/ProtectedRoutes/ProtectedRoutes';
import JobListing from './pages/user/JobListing/JobListing';

import Erorr from './pages/user/Error/Error';
import Login from './pages/user/Login/Login';
import Register from './pages/user/Register/Register';
import JobDetail from './pages/user/JobDetail/JobDetail';
import CompanyListing from './pages/user/CompanyListing/CompanyListing';
import CompanyDetail from './pages/user/CompanyDetail/CompanyDetail';

import BlogGrid from './pages/user/BlogGrid/BlogGrid';
import BlogDetail from './pages/user/BlogDetail/BlogDetail';
import Contact from './pages/user/Contact/Contact';
import PostJob from './pages/user/PostJob/PostJob';
import Profile from './pages/user/Profile/Profile';
import MyProfile from './pages/user/Profile/MyProfile/MyProfile';

function App() {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="job-listing" element={<JobListing />} />
                <Route path="job-detail" element={<JobDetail />} />
                <Route path="company-listing" element={<CompanyListing />} />
                <Route path="/BlogGird" index element={<BlogGrid />} />
                <Route path="/BlogDetail" index element={<BlogDetail />} />
                <Route path="/Contact" index element={<Contact />} />
                <Route path="company-detail" element={<CompanyDetail />} />
                <Route path="post-job" element={<PostJob />} />
                <Route path="profile" element={<Profile />}>
                    <Route path="/my-profile" element={<MyProfile />} />
                </Route>
                <Route path="login" index element={<Login />} />
                <Route path="register" index element={<Register />} />
            </Route>

            {/* Protected Routes */}
            <Route path="admin" element={<ProtectedRoutes />}>
                <Route index element={<div>Admin page</div>} />
            </Route>

            <Route path="*" element={<Erorr />} />
        </Routes>
    );
}

export default App;
