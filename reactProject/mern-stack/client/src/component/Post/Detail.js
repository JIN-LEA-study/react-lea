import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { PostDiv, Post, BtnDiv } from "../../Style/PostDetailCSS.js";

function Detail() {
  let params = useParams();
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

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

  const DeleteHandler = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      let body = {
        postNum: params.postNum,
      };
      axios
        .post("/api/post/delete", body)
        .then((response) => {
          if (response.data.success) {
            alert("게시글이 삭제되었습니다");
            navigate("/");
          }
        })
        .catch((err) => {
          alert("게시글이 삭제에 실패하였습니다");
        });
    }
  };

  return (
    <PostDiv>
      {flag ? (
        <>
          <Post>
            <h1>{postInfo.title}</h1>
            <h3>{postInfo.author.displayName}</h3>
            {postInfo.image ? (
              <img
                //외부저장소로 변경
                src={postInfo.image}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            ) : null}
            <p>{postInfo.content}</p>
          </Post>
          {user.uid === postInfo.author.uid && (
            <BtnDiv>
              <Link to={`/edit/${postInfo.postNum}`}>
                <button className="edit">수정</button>
              </Link>
              <button className="delete" onClick={() => DeleteHandler()}>
                삭제
              </button>
            </BtnDiv>
          )}
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
