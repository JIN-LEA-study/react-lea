import React, { useState } from "react";

function List() {
  const [content, setContent] = useState("");
  const [contentList, setContentList] = useState([]);
  const onSubmit = () => {
    let tempArr = [...contentList];
    tempArr.push(content);
    setContentList([...tempArr]);
    setContent("");
  };
  return (
    <div>
      {contentList.map((content, index) => {
        return (
          <div
            key={index}
            style={{
              width: "100%",
              marginLeft: "1rem",
            }}
          >
            내용 : {content}
          </div>
        );
      })}
    </div>
  );
}

export default List;
