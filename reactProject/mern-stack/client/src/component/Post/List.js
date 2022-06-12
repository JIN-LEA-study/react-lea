import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListItem, ListDiv } from "../../Style/ListCSS";
import { Link } from "react-router-dom";

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
          <ListItem key={index}>
            <Link to={`/post/${post.postNum}`}>
              <p className="title">{post.title}</p>
              {/* <p className="auth">{post.author.displayName}</p> */}
              <p>{post.content}</p>
            </Link>
          </ListItem>
        );
      })}
    </ListDiv>
  );
}

export default List;
