import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/NavBar";


function App() {
  return (
    <Router>
      <Navbar />
      <HomePage />
    </Router>
  );
}

export default App;
