import React, { useState, useEffect } from "react";
import axios from "axios";

function List(props) {
  useEffect(() => {
    axios
      .post("/api/test")
      .then((response) => {
        alert("요청성공");
        console.log(response);
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
