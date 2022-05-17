import "./App.css";
import { useState } from "react";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import Productpage from "./page/Productpage";
import ProductDetailpage from "./page/ProductDetailpage";
import Loginpage from "./page/Loginpage";
import UserPage from "./page/Userpage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  // false 경우 user가 login을 안했고, true 경우 login
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    //리다이렉트
    return authenticate == true ? <UserPage /> : <Navigate to="/login" />;
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/products/:id" element={<ProductDetailpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
