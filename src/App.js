import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Login from "../src/pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
