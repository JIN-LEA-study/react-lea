import React, { useState, useEffect } from "react";

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
    <div>
      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          onSubmit();
        }}
        style={{ marginTop: "1rem" }}
      >
        제출!
      </button>
    </div>
  );
}

export default Upload;
