import React, { useRef, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const RepleUpload = () => {
  const [reple, setReple] = useState("");
  const user = useSelector((state) => state.user);
  const SubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      reple: reple,
      uid: user.uid,
    };
    axios.post("api/reple/submit", body);
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={reple}
          onChange={(e) => setReple(e.currentTarget.value)}
        />
        <button onClick={(e) => SubmitHandler(e)}>등록</button>
      </form>
    </div>
  );
};

export default RepleUpload;
