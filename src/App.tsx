import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/layouts/user/DefaultLayout/DefaultLayout.tsx';
import Home from './pages/user/Home/Home';
import ProtectedRoutes from './layouts/auth/ProtectedRoutes/ProtectedRoutes';
import JobListing from './pages/user/JobListing/JobListing';
import Error from './pages/user/Error/Error';
import Login from './pages/user/Login/Login';
import Register from './pages/user/Register/Register';
import JobDetail from './pages/user/JobDetail/JobDetail';
import CompanyListing from './pages/user/CompanyListing/CompanyListing';
import CompanyDetail from './pages/user/CompanyDetail/CompanyDetail';

import BlogGrid from './pages/user/BlogGrid/BlogGrid';
import BlogDetail from './pages/user/BlogDetail/BlogDetail';
import Contact from './pages/user/Contact/Contact';
import PostJob from './pages/user/PostJob/PostJob';
import Manager from './pages/user/Manager/Manager';
import MyProfile from './pages/user/Manager/JobSeeker/MyProfile/MyProfile';
import AppliedJobs from './pages/user/Manager/JobSeeker/AppliedJobs/AppliedJobs';
import Setting from './components/Settings/Settings';
import Admin from './pages/admin/Home/Admin';
import ManageUser from './pages/admin/ManageUser/ManageUser';
import AdminLayout from './layouts/admin/AdminLayout/AdminLayout';
import { RootState } from './store/store';
import { useSelector } from 'react-redux';
import { isCompany, isJobSeeker } from './utils/helper';
import Company from './pages/user/Manager/Company/Company';
import JobCreated from './pages/user/Manager/Company/JobCreated/JobCreated';
import JobApplication from './pages/user/Manager/Company/JobApplication/JobApplication';
import JobDeleted from './pages/user/Manager/Company/JobDeleted/JobDeleted';
import ManageJob from './pages/admin/ManageJob/ManageJob';
import ManageCategory from './pages/admin/ManageCategory/ManageCategory';

function App() {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const jobSeeker = isJobSeeker(currentUser);
    const company = isCompany(currentUser);

    return (
        <Routes>
            {/* Public routes */}
            <Route element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="job-listing" index element={<JobListing />} />
                <Route path="job-detail/:id" index element={<JobDetail />} />
                <Route path="company-listing" index element={<CompanyListing />} />
                <Route path="company-detail/:id" index element={<CompanyDetail />} />

                <Route path="login" index element={<Login />} />
                <Route path="register" index element={<Register />} />
                <Route path="error" index element={<Error />} />
                <Route path="unauthorized" index element={<>unauthorized</>} />
                <Route path="blogGird" index element={<BlogGrid />} />
                <Route path="blogDetail" index element={<BlogDetail />} />
                <Route path="contact" index element={<Contact />} />
                <Route path="login" index element={<Login />} />
                <Route path="register" index element={<Register />} />
                <Route path="setting" index element={<Setting />} />
            </Route>

            {/* Protected Routes */}
            <Route element={<ProtectedRoutes />}>
                <Route element={<DefaultLayout />}>
                    {jobSeeker && (
                        <Route path="profile" element={<Manager />}>
                            <Route index element={<MyProfile />} />
                            <Route path="applied-jobs" element={<AppliedJobs />} />
                        </Route>
                    )}

                    <Route path="profile" element={<Manager />}>
                        <Route index element={<Company />} />
                        <Route path="job-created" element={<JobCreated />} />
                        <Route path="jobApplication/:id" element={<JobApplication />} />
                        <Route path="job-deleted" element={<JobDeleted />} />
                    </Route>
                    <Route path="post-job" index element={<PostJob />} />
                </Route>
                <Route element={<AdminLayout />}>
                    <Route path="admin" index element={<Admin />} />
                    <Route path="admin/users" index element={<ManageUser />} />
                    <Route path="admin/jobs" index element={<ManageJob />} />
                    <Route path="admin/categories" index element={<ManageCategory />} />
                </Route>
            </Route>

            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default App;
