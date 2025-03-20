import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RoutesComponent from "./routes";
import Header from "./components/ui/header/Header";
import Footer from "./components/ui/footer/Footer";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; // Import đúng cách
import { BASE_URL } from "./config/api";

function App() {
    const [role, setRole] = useState(null);

    useEffect(() => {
        getRoleUser();
    }, []);

    const getRoleUser = () => {
        const access = localStorage.getItem('_acc');
        if (!access) {
            setRole(null);
            return;
        }
        try {
            const decoded = jwtDecode(access);
            if (decoded.exp < Date.now() / 1000) {
                fetchNewToken();
            } else {
                setRole(decoded.role ? decoded.role.toUpperCase() : '');
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
            getRoleUser();
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
        const checkAndRefreshToken = () => {
            const access = localStorage.getItem('_acc');
            if (!access) return;
            try {
                const decoded = jwtDecode(access);
                // Nếu token sắp hết hạn trong vòng 5 phút thì refresh
                if (decoded.exp < (Date.now() / 1000) + 300) {
                    fetchNewToken();
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

    return (
        <Router>
            <Header />
            <Routes>
                {
                    (role === '' || role === null) && (
                        <Route path={"/*"} element={<RoutesComponent />} />
                    )
                }

                {role === 'MANAGER' && <Route path="/manager/*" element={<RoutesComponent />} />}
                {role === 'FRANCHISEE_OWNER' && <Route path="/franchisee/*" element={<RoutesComponent />} />}
                {role === 'SHIPPER' && <Route path="/shipper/*" element={<RoutesComponent />} />}
                {role === 'WORKER' && <Route path="/worker/*" element={<RoutesComponent />} />
                }

                {role === 'CUSTOMER' ? (
                    <Route path="/user/*" element={<RoutesComponent />} />
                ) : (
                    <Route path="/user/*" element={<Navigate to="/login" replace />} />
                )}

                {role === 'ADMIN' ? (
                    <Route path="/admin/*" element={<RoutesComponent />} />
                ) : (
                    <Route path="/admin/*" element={<Navigate to="/404" replace />} />
                )}

                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
