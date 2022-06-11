import React, { useEffect } from "react";
import "./App.css";

// redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearUser } from "./Reducer/userSlice";

// router
import { Routes, Route } from "react-router-dom";
import List from "./component/Post/List";
import Heading from "./component/Heading";
import Upload from "./component/Post/Upload";
import Detail from "./component/Post/Detail";
import Edit from "./component/Post/Edit";
import Login from "./user/Login";
import Register from "./user/Register";

function App() {
  useEffect(() => {
    return () => {};
  }, []);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/post/:postNum" element={<Detail />}></Route>
        <Route path="/edit/:postNum" element={<Edit />}></Route>
      </Routes>
    </>
  );
}

export default App;
