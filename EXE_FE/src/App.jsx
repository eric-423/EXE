import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes";
import Header from './components/ui/header/Header';
import Footer from './components/ui/footer/Footer';
import { useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import { BASE_URL } from "./config/api";

function App() {
    const [role, setRole] = useState("")

    const getRoleUser = () => {
        const access = localStorage.getItem('__acc')
        try {
            const decode = jwtDecode(access);
            if (decode.exp < Date.now() / 1000) {
                console.log("Token expired");
                return;
            }
            setRole((decode.role).toUpperCase())
        } catch (error) {
        }
    }

    useEffect(() => {
        getRoleUser()
    }, [])


    useEffect(() => {
        const access = localStorage.getItem('_acc')
        try {
            const decode = jwtDecode(access)
            if (decode.exp < Date.now() / 1000) {
                fetchNewToken();
            }
        } catch (error) {
        }
    }, [])

    const fetchNewToken = async () => {
        const refresh = localStorage.getItem('_ref')
        try {
            const response = await fetch(`${BASE_URL}/token/refresh?token=${refresh}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                const data = await response.json()
                localStorage.setItem('_acc', data.access)
                localStorage.setItem('_ref', data.refresh)
            } else {
                localStorage.removeItem('_acc')
                localStorage.removeItem('_ref')
            }
        } catch (error) {
        }
    }


    return (
        <Router>
            {
                role !== 'admin' ? <Header /> : null
            }
            <RoutesComponent />
            {
                role !== 'admin' ? <Footer /> : null
            }
        </Router>
    );
}

export default App;
