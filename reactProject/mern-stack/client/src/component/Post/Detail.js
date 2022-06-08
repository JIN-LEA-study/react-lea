import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { PostDiv, Post, BtnDiv } from "../../Style/PostDetailCSS.js";

function Detail() {
  let params = useParams();
  const [postInfo, setPostInfo] = useState({});
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };
    axios
      .post("/api/post/detail", body)
      .then((response) => {
        if (response.data.success) {
          setPostInfo(response.data.post);
          setFlag(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(postInfo);
  }, [postInfo]);

  return (
    <PostDiv>
      {flag ? (
        <>
          <div>
            {postInfo.title}
            {postInfo.content}
          </div>
          <BtnDiv>
            <Link to={`/edit/${postInfo.postNum}`}>
              <button className="edit">수정</button>
            </Link>
            <button className="delete">삭제</button>
          </BtnDiv>
        </>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </PostDiv>
  );
}

export default Detail;
