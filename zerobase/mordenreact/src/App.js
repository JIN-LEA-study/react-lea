import "./App.css";
import InputSample from "./InputSample";
import UserList from "./UserList";
import React, { useRef } from "react";

function App() {
  const users = [
    {
      id: 1,
      username: "lea",
      email: "lea@gamil.com",
    },
    {
      id: 2,
      username: "lulu",
      email: "lulu@gamil.com",
    },
    {
      id: 3,
      username: "summer",
      email: "summer@gamil.com",
    },
  ];

  // 값이 바뀐다고해도 리렌더링 될 필요가 없음
  const nextId = useRef(4);
  const onCreate = () => {
    console.log(nextId.current); //4
    nextId.current += 1; //기존값에 1씩 증가
  };

  return <UserList users={users} />;
}

export default App;
