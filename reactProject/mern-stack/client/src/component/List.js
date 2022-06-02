import React, { useState } from "react";

function List(props) {
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
