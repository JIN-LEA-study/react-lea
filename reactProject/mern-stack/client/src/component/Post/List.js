import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListItem, ListDiv } from "../../Style/ListCSS";

function List(props) {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ListDiv>
      {postList.map((post, index) => {
        return (
          <ListItem>
            <p className="title">{post.title}</p>
            <p>{post.content}</p>
          </ListItem>
        );
      })}
    </ListDiv>
  );
}

export default List;
