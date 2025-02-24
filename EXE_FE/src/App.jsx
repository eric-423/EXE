import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes";
import Header from './components/ui/header/Header';
import Footer from './components/ui/footer/Footer';

function App() {
    return (
        <Router>
            <Header />
            <RoutesComponent />
            <Footer />
        </Router>
    );
}

export default App;
