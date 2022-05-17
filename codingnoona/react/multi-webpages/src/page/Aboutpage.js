import React from "react";
import { useNavigate } from "react-router-dom";

const Aboutpage = () => {
  const navigate = useNavigate();
  const goToHomepages = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Aboutpage</h1>
      <button onClick={goToHomepages}>Go to Homepage</button>
    </div>
  );
};

export default Aboutpage;
