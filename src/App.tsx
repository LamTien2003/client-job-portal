import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/layouts/user/DefaultLayout/DefaultLayout.tsx';
import Home from './pages/user/Home/Home';
import ProtectedRoutes from './layouts/auth/ProtectedRoutes/ProtectedRoutes';
import JobListing from './pages/user/JobListing/JobListing';
import Erorr from './pages/user/Erorr/Erorr';
import Login from './pages/user/Login/Login'
import Register from './pages/user/Register/Register';
import JobDetail from './pages/user/JobDetail/JobDetail';
import CompanyListing from './pages/user/CompanyListing/CompanyListing';
import CompanyDetail from './pages/user/CompanyDetail/CompanyDetail';

function App() {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path='job-listing' index element={<JobListing />} />
                <Route path='job-detail' index element={<JobDetail />} />
                <Route path='company-listing' index element={<CompanyListing />} />
                <Route path='company-detail' index element={<CompanyDetail />} />
            </Route>

            <Route path="" element={<DefaultLayout />}>\
                <Route index element={<Home />} />
                <Route path='Login' index element={<Login />} />
                <Route path='Register' index element={<Register />} />
                <Route path='Erorr' index element={<Erorr />} />
            </Route>

            {/* Protected Routes */}
            <Route path="admin" element={<ProtectedRoutes />}>
                <Route index element={<div>Admin page</div>} />
            </Route>

            <Route path="*" element={<div>Page not found</div>} />
        </Routes>
    );
}

export default App;
