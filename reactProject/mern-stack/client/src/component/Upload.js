import React, { useState, useEffect } from "react";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../Style/UploadCSS";

function Upload(props) {
  const [content, setContent] = useState("");

  const onSubmit = () => {
    let tempArr = [...props.contentList];
    tempArr.push(content);
    props.setContentList([...tempArr]);
    setContent("");
  };

  useEffect(
    () => {
      // 컴포넌트가 나타날 때 실행될 코드(mount)
      return () => {
        // 컴포넌트가 죽을 때 실행될 코드
      };
    },
    [
      /*useEffect가 실행될 조건, 빈배열일 경우 한번만 실행*/
    ]
  );

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="">Title</label>
        <input
          id="title"
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <label htmlFor="">Content</label>
        <textarea
        // id="content"
        // type="text"
        // value={content}
        // onChange={(e) => {
        //   setContent(e.currentTarget.value);
        // }}
        />
        <UploadButtonDiv>
          <button
            onClick={() => {
              onSubmit();
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
