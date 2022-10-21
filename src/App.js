import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Houseboard from "./pages/Houseboard";
import Houselist from "./pages/Houselist";

function App() {
  return (

  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/house" element={<Houseboard />} />
    <Route path="/list" element={<Houselist />} />
    {/* <Route path="/login" element={user ? <Dashboard /> : <Login />} /> */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
  );
}

export default App;
