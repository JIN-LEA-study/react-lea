import React, { useState, useEffect } from "react";
import axios from "axios";
import Detail from "./Detail";
import { useParams } from "react-router-dom";
import RepleArea from "../Reple/RepleArea";

// Spinner
import { Spinner } from "react-bootstrap";
import { SpinnerDiv } from "../../Style/PostDetailCSS";

const PostArea = () => {
  const [postInfo, setPostInfo] = useState({});
  const [flag, setFlag] = useState(false);

  let params = useParams();

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

  return (
    <div>
      {flag ? (
        <>
          <Detail PostInfo={postInfo} />
          <RepleArea postId={postInfo._id} />
        </>
      ) : (
        <SpinnerDiv>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </SpinnerDiv>
      )}
    </div>
  );
};

export default PostArea;
