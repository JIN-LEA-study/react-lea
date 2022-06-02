import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import List from "./component/List";
import Heading from "./component/Heading";
import Upload from "./component/Upload";

function App() {
  const [content, setContent] = useState("");
  const [contentList, setContentList] = useState([]);
  return (
    <>
      <Heading />
      <Routes>
        <Route
          path="/list"
          element={
            <List contentList={contentList} setContentList={setContentList} />
          }
        ></Route>
        <Route
          path="/upload"
          element={
            <Upload contentList={contentList} setContentList={setContentList} />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
