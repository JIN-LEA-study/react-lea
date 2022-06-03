import React, { useState, useEffect } from "react";
import { UploadDiv, UploadForm, UploadButton } from "../Style/UploadCSS";

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
        <label htmlFor="">제목</label>
        <input
          id="title"
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <label htmlFor="">내용</label>
        <textarea
        // id="content"
        // type="text"
        // value={content}
        // onChange={(e) => {
        //   setContent(e.currentTarget.value);
        // }}
        />
        <UploadButton
          onClick={() => {
            onSubmit();
          }}
          style={{ marginTop: "1rem" }}
        >
          제출!
        </UploadButton>
      </UploadForm>
    </UploadDiv>
  );
}

export default Upload;
