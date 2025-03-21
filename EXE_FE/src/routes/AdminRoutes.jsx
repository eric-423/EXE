import { Routes, Route } from 'react-router-dom';
import Admin from '../pages/admin/AdminLayout';

function AdminRoutes() {
    return (
        <Routes>
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
}

export default AdminRoutes; 