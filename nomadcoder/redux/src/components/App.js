import React from "react";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
