import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function List(props) {
  const [text, setText] = useState("");

  useEffect(() => {
    let body = {
      text: "hello",
    };

    axios
      .post("/api/test", body)
      .then((response) => {
        alert("요청성공");
        console.log(response);
        setText(response.data.text);
      })
      .catch((error) => {
        //에러 핸들링
        alert("요청실패");
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>List</h1>
      <h3>{text}</h3>
      {props.contentList.map((content, index) => {
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
