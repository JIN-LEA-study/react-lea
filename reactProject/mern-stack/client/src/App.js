import React, { useEffect } from "react";
import "./App.css";

// firebase
import firebase from "./component/firebase";

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
// import { firebase } from "firebase/compat/app";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      // console.log("userInfo:", userInfo);
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      }
    });
  }, []);

  // user가 바뀔 때 마다
  useEffect(() => {
    console.log("user:", user);
  }, [user]);

  useEffect(() => {
    // firebase.auth().signOut();
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
