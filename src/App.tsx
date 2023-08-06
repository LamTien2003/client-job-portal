import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/layouts/user/DefaultLayout/DefaultLayout.tsx';
import Home from './pages/user/Home/Home';
import ProtectedRoutes from './layouts/auth/ProtectedRoutes/ProtectedRoutes';

function App() {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="" element={<DefaultLayout />}>
                <Route index element={<Home />} />
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
