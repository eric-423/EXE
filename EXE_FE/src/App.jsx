import "./index.css"; // Ensure the CSS file is imported here as well
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD

=======
// import "font-awesome/css/font-awesome.min.css";
>>>>>>> 4941902b8994b0112033a88c488d2031d8c2b663
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes";

function App() {
    return (
        <Router>
            <RoutesComponent />
        </Router>
    );
}

export default App;
