import React, { useRef, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const RepleUpload = (props) => {
  const [reple, setReple] = useState("");
  const user = useSelector((state) => state.user);
  const SubmitHandler = (e) => {
    e.preventDefault();

    if (!reple) {
      return alert("댓글 내용을 채워주세요");
    }

    let body = {
      reple: reple,
      uid: user.uid,
      postId: props.postId,
    };
    axios.post("api/reple/submit", body).then((response) => {
      if (response.data.success) {
        alert("댓글 작성이 성공하였습니다");
      } else {
        alert("댓글 작성에 실패하였습니다");
      }
    });
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
