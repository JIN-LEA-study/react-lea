import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import List from "./component/Post/List";
import Heading from "./component/Heading";
import Upload from "./component/Post/Upload";
import Detail from "./component/Post/Detail";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/post/:postNum" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
