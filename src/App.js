import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Houseboard from "./pages/Houseboard";
import Houselist from "./pages/Houselist";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AddHouse from "./pages/AddHouse";
import AddPaymentItem from "./pages/AddPaymentItem";

function App() {
  const { userInfo } = useSelector((state) => state.user);
  useEffect(() => {
  }, [userInfo])
  
  return (
    <Routes>
      <Route path="/" element={userInfo ? <Dashboard /> : <Login />} />
      <Route path="/house" element={userInfo ? <Houseboard /> : <Login />} />
      <Route path="/list/:id" element={userInfo ? <Houselist /> : <Login />} />
      <Route path="/add-house" element={userInfo ? <AddHouse /> : <Login />} />
      <Route
        path="/add-payment"
        element={userInfo ? <AddPaymentItem /> : <Login />}
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
