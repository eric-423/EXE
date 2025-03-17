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
        try {
            const decode = jwtDecode(access);
            if (decode.exp < Date.now() / 1000) {
                fetchNewToken();
                return;
            }
            setRole((decode.role).toUpperCase())
        } catch (error) {
            console.error('Lỗi khi decode token:', error);
        }

    }
  };

    useEffect(() => {
        getRoleUser()
    }, [])

    const fetchNewToken = async () => {
        const refresh = localStorage.getItem('_ref');
        if (!refresh) {
            console.error('Refresh token không tồn tại');
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
                localStorage.removeItem('_acc');
                localStorage.removeItem('_ref');
            }
        } catch (error) {
            console.error('Lỗi khi thực hiện fetch:', error);
        }

    }
  };

    useEffect(() => {
        const checkAndRefreshToken = () => {
            const access = localStorage.getItem('_acc');
            try {
                const decoded = jwtDecode(access);
                if (decoded.exp < (Date.now() / 1000) + 300) {
                    fetchNewToken();
                }
            } catch (error) {
                console.error('Lỗi khi decode token:', error);
            }
        };

        checkAndRefreshToken();
        const interval = setInterval(checkAndRefreshToken, 1 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Router>
            {!role && (
                <>
                    <Header />
                    <RoutesComponent />
                    <Footer />
                </>
            )}
            {window.location.pathname.includes('/admin') && role !== 'ADMIN' && (
                <Navigate to="/404" replace />
            )}
            {role === 'CUSTOMER' && (
                <>
                    <Header />
                    <RoutesComponent />
                    <Footer />
                </>
            )}
            {role === 'ADMIN' && (
                <>
                    <RoutesComponent />
                </>
            )}
            {role === 'MANAGER' && (
                <>
                    <RoutesComponent />
                </>
            )}
            {role === 'FRANCHISEE_OWNER' && (
                <>
                    <RoutesComponent />
                </>
            )}
            {role === 'SHIPPER' && (
                <>
                    <Header />
                    <RoutesComponent />
                </>
            )}
            {role === 'WORKER' && (
                <>
                    <Header />
                    <RoutesComponent />
                </>
            )}
        </Router>
    );

}

export default App;
