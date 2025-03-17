import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
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
                console.log("Token expired");
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


    useEffect(() => {
        const access = localStorage.getItem('_acc')
        try {
            const decode = jwtDecode(access)
            if (decode.exp < Date.now() / 1000) {
                fetchNewToken();
            }
        } catch (error) {
            console.error('Lỗi khi decode token:', error);
        }
    }, [])

    const fetchNewToken = async () => {
        const refesh = localStorage.getItem('_ref');
        if (!refesh) {
            console.error('refesh =null');
            return;
        }
        try {
            const response = await fetch(`${BASE_URL}/token/refresh?token=${refesh}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("_acc", data.access);
        localStorage.setItem("_ref", data.refresh);
      } else {
        console.error("Không thể làm mới token:", response.statusText);
        localStorage.removeItem("_acc");
        localStorage.removeItem("_ref");
      }
    } catch (error) {
      console.error("Lỗi khi thực hiện fetch:", error);
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('_acc', data.access);
                localStorage.setItem('_ref', data.refresh);
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

  return (
    <Router>
      {role !== "admin" ? <Header /> : null}
      <RoutesComponent />
      {role !== "admin" ? <Footer /> : null}
    </Router>
  );
}

export default App;
