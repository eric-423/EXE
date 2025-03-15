import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes";
import Header from './components/ui/header/Header';
import Footer from './components/ui/footer/Footer';
import { useEffect, useState } from "react";

function App() {
    const [role, setRole] = useState('')

    const getRoleUser = () => {
        const role = localStorage.getItem('token')
        const decode = JSON.parse(role);
        // setRole(decode.role)
        setRole("asdasd")
    }

    useEffect(() => {
        getRoleUser()
    }, [])

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
