import React, { useState, useEffect } from "react";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../Style/UploadCSS";
import axios from "axios";

function Upload(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // title, contetn 창에 글이 입력되지 않았을 경우
    if (title === "" || content === "") {
      return alert("모든 항목을 채워주세요!");
    }
    let body = {
      title: title,
      content: content,
    };
    axios
      .post("/api/post/submit", body)
      .then((response) => {
        if (response.data.success) {
          alert("글 작성이 완료되었습니다.");
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
