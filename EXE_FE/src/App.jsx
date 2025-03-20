import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RoutesComponent from "./routes";
import Header from "./components/ui/header/Header";
import Footer from "./components/ui/footer/Footer";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from "./config/api";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    const [role, setRole] = useState(null);
    useEffect(() => {
        getRoleUser();
        console.log("Current role:", role);
    }, []);

    const getRoleUser = async () => {
        const access = localStorage.getItem('_acc');
        if (!access) {
            setRole(null);
            return;
        }

        try {
            const decoded = jwtDecode(access);
            if (decoded.exp < Date.now() / 1000) {
                await fetchNewToken();
            } else {
                setRole(decoded.role);
                console.log(decoded.role)
            }
        } catch (error) {
            console.error('Lỗi khi decode token:', error);
            clearTokens();
        }
    };

    const fetchNewToken = async () => {
        const refresh = localStorage.getItem('_ref');
        if (!refresh) {
            console.error('Refresh token không tồn tại');
            clearTokens();
            return;
        }


        try {
            const response = await fetch(`${BASE_URL}/token/refresh?token=${refresh}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Không thể làm mới token: ${response.statusText}`);
            }

            const data = await response.json();
            localStorage.setItem('_acc', data.access_token);
            localStorage.setItem('_ref', data.refresh_token);
            const decoded = jwtDecode(data.access_token);
            setRole(decoded.role);
        } catch (error) {
            console.error('Lỗi khi thực hiện fetch:', error);
            clearTokens();
        }
    };

    const clearTokens = () => {
        setRole(null);
        localStorage.removeItem('_acc');
        localStorage.removeItem('_ref');
    };

    useEffect(() => {
        const checkAndRefreshToken = async () => {
            const access = localStorage.getItem('_acc');
            if (!access) return;
            try {
                const decoded = jwtDecode(access);
                if (decoded.exp < (Date.now() / 1000) + 300) {
                    await fetchNewToken();
                }
            } catch (error) {
                console.error('Lỗi khi decode token:', error);
                clearTokens();
            }
        };

        checkAndRefreshToken();
        const interval = setInterval(checkAndRefreshToken, 1 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);



    const CustomerLayout = () => (
        <>
            <Header />
            <RoutesComponent />
            <Footer />
        </>
    );



    return (
        <BrowserRouter>
            {/* <Routes>
                {
                    (role == null || role == undefined || role == 'CUSTOMER') &&
                    (
                        <Route path="/*" element={<CustomerLayout />} />
                    )
                }

                {role == 'MANAGER' && <Route path="/manager/*" element={<RoutesComponent />} />}
                {role == 'FRANCHISEE_OWNER' && <Route path="/franchisee/*" element={<RoutesComponent />} />}
                {role == 'SHIPPER' && <Route path="/shipper/*" element={<RoutesComponent />} />}
                {role == 'WORKER' && <Route path="/worker/*" element={<RoutesComponent />} />}

                {role && role != 'CUSTOMER' && <Route path="/user/*" element={<Navigate to="/login" replace />} />}

                {
                    role == 'ADMIN' && <Route path="/admin/*" element={<RoutesComponent />} />
                }

                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes> */}
            <RoutesComponent />

        </BrowserRouter>
    );
}

export default App;
