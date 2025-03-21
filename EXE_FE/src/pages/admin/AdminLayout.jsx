import SideBar from '../../components/admin/SideBar'
import "./AdminLayout.css"
import Navbar from '../../components/admin/Navbar'
import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from 'react'
const AdminLayout = () => {
    const [loading, setLoading] = useState(false);

    const checkIsAdmin = async () => {
        const accessToken = localStorage.getItem("_acc");
        if (!accessToken) {
            window.location.href = "/";
        }

        const decodedToken = jwtDecode(accessToken);

        if ((decodedToken.role).toUpperCase() != "MANAGER") {
            window.location.href = "/";
        } else {
            setLoading(true)
        }
    }

    useEffect(() => {
        checkIsAdmin();
    }, []);

    return (
        <>
            {
                loading && <>
                    <SideBar />
                    <Navbar />
                </>
            }
        </>
    )
}

export default AdminLayout