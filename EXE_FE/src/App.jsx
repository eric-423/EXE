import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
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
