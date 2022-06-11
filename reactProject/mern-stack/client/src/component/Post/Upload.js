import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload";

function Upload(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.accessToken) {
      alert("로그인한 회원만 글을 작성할 수 있습니다");
      navigate("/login");
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // title, content 창에 글이 입력되지 않았을 경우
    if (title === "" || content === "") {
      return alert("모든 항목을 채워주세요!");
    }
    let body = {
      title: title,
      content: content,
      image: image,
      uid: user.uid,
    };
    axios
      .post("/api/post/submit", body)
      .then((response) => {
        if (response.data.success) {
          alert("글 작성이 완료되었습니다.");
          navigate("/");
        } else {
          alert("글 작성에 실패하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.currentTarget.value);
          }}
        />
        <ImageUpload setImage={setImage} />
        <label htmlFor="">Content</label>
        <textarea
          id="content"
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.currentTarget.value);
          }}
        />
        <UploadButtonDiv>
          <button
            onClick={(e) => {
              onSubmit(e);
            }}
            style={{ marginTop: "1rem" }}
          >
            제출
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}

export default Upload;
