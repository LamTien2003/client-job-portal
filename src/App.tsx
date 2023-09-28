import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/layouts/user/DefaultLayout/DefaultLayout.tsx';
import Home from './pages/user/Home/Home';
import ProtectedRoutes from './layouts/auth/ProtectedRoutes/ProtectedRoutes';
import JobListing from './pages/user/JobListing/JobListing';
import Error from './pages/user/Error/Error';
import Login from './pages/user/Login/Login'
import Register from './pages/user/Register/Register';
import JobDetail from './pages/user/JobDetail/JobDetail';
import CompanyListing from './pages/user/CompanyListing/CompanyListing';
import CompanyDetail from './pages/user/CompanyDetail/CompanyDetail';

import BlogGrid from './pages/user/BlogGrid/BlogGrid';
import BlogDetail from './pages/user/BlogDetail/BlogDetail';
import Contact from './pages/user/Contact/Contact';
import PostJob from './pages/user/PostJob/PostJob';
import PersistLogin from './components/PersistLogin/PersistLogin';
import Admin from './components/Admin/Admin';

function App() {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path='job-listing' index element={<JobListing />} />
                <Route path='job-detail/:id' index element={<JobDetail />} />
                <Route path='company-listing' index element={<CompanyListing />} />
                <Route path='company-detail/:id' index element={<CompanyDetail />} />
                <Route path='post-job' index element={<PostJob />} />
            </Route>

            <Route path="" element={<DefaultLayout />}>\
                <Route index element={<Home />} />
                <Route path='Login' index element={<Login />} />
                <Route path='Register' index element={<Register />} />
                <Route path='Error' index element={<Error />} />
                <Route path='unauthorized' index element={<>unauthorized</>} />
            </Route>

            {/* Link các phần công việc của Thưởng */}
            <Route path="" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path='/BlogGird' index element={<BlogGrid />} />
                <Route path='/BlogDetail' index element={< BlogDetail/>} />
                <Route path='/Contact' index element={<Contact />} />
            </Route>

            {/* Protected Routes */}
            <Route element={<ProtectedRoutes allowedRoles={'user'} />}>
                <Route path="admin" index element={<Admin />} />
                <Route path="admin/user" index element={<>User list</>} />
                <Route path="edit" index element={<Admin />} />
            </Route>

            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default App;
