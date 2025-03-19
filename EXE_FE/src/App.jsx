import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navigate, BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes";
import Header from "./components/ui/header/Header";
import Footer from "./components/ui/footer/Footer";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from "./config/api";

function App() {
    const [role, setRole] = useState("");

    const getRoleUser = () => {
        const access = localStorage.getItem('_acc')
        if (!access) {
            setRole("");
            return;
        }
        try {
            const decode = jwtDecode(access);
            if (decode.exp < Date.now() / 1000) {
                fetchNewToken();
                return;
            }
            setRole((decode.role).toUpperCase())
        } catch (error) {
            console.error('Lỗi khi decode token:', error);
            setRole("");
        }
    }

    useEffect(() => {
        getRoleUser()
    }, [])

    const fetchNewToken = async () => {
        const refresh = localStorage.getItem('_ref');
        if (!refresh) {
            console.error('Refresh token không tồn tại');
            setRole("");
            localStorage.removeItem('_acc');
            localStorage.removeItem('_ref');
            return;
        }
        try {
            const response = await fetch(`${BASE_URL}/token/refresh?token=${refresh}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('_acc', data.access_token);
                localStorage.setItem('_ref', data.refresh_token);
                getRoleUser();
            } else {
                console.error('Không thể làm mới token:', response.statusText);
                setRole("");
                localStorage.removeItem('_acc');
                localStorage.removeItem('_ref');
            }
        } catch (error) {
            console.error('Lỗi khi thực hiện fetch:', error);
            setRole("");
            localStorage.removeItem('_acc');
            localStorage.removeItem('_ref');
        }
    }

    useEffect(() => {
        const checkAndRefreshToken = () => {
            const access = localStorage.getItem('_acc');
            if (!access) return;

            try {
                const decoded = jwtDecode(access);
                if (decoded.exp < (Date.now() / 1000) + 300) {
                    fetchNewToken();
                }
            } catch (error) {
                console.error('Lỗi khi decode token:', error);
                setRole("");
                localStorage.removeItem('_acc');
                localStorage.removeItem('_ref');
            }
        };

        checkAndRefreshToken();
        const interval = setInterval(checkAndRefreshToken, 1 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    const renderContent = () => {
        switch (role) {
            case "CUSTOMER":
                return (
                    <>
                        <Header />
                        <RoutesComponent />
                        <Footer />
                    </>
                );
            case "ADMIN":
            case "MANAGER":
            case "FRANCHISEE_OWNER":
                return <RoutesComponent />;
            case "SHIPPER":
            case "WORKER":
                return (
                    <>
                        <Header />
                        <RoutesComponent />
                    </>
                );
            default:
                return (
                    <>
                        <Header />
                        <RoutesComponent />
                        <Footer />
                    </>
                );
        }
    }

    return (
        <Router>
            {window.location.pathname.includes('/admin') && !role && role != 'ADMIN' && (
                <Navigate to="/404" replace />
            )}
            {window.location.pathname.includes('/manager') && !role && role != 'MANAGER' && (
                <Navigate to="/404" replace />
            )}
            {window.location.pathname.includes('/franchisee') && !role && role != 'FRANCHISEE_OWNER' && (
                <Navigate to="/404" replace />
            )}
            {window.location.pathname.includes('/shipper') && !role && role != 'SHIPPER' && (
                <Navigate to="/404" replace />
            )}
            {window.location.pathname.includes('/worker') && !role && role != 'WORKER' && (
                <Navigate to="/404" replace />
            )}
            {window.location.pathname.includes('/user') && !role && role != 'CUSTOMER' && (
                <Navigate to="/login" replace />
            )}
            {renderContent()}
        </Router>
    );
};

export default App;
