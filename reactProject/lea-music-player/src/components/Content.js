import React, { memo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// Ant Design Icons
import { AiFillCustomerService, AiFillStar } from "react-icons/ai";
// AiOutlineStar, AiOutlineReload 빈하트

const Content = () => {
  const playList = useSelector((state) => state.playList);
  const currentIndex = useSelector((state) => state.currentIndex);
  return (
    <ContentSection>
      <ContentTitle>
        <AiFillCustomerService color="#ffffff" size="20px" />
        &nbsp; {playList[currentIndex].artist} - {playList[currentIndex].name}
      </ContentTitle>
      <ContentLike>
        <AiFillStar color="#ffffff" size="30px" />
      </ContentLike>
    </ContentSection>
  );
};

const ContentSection = styled.div`
  width: 90%;
  top: 5%;
  height: 5%;
  position: absolute;
  /* background-color: white; */
  display: flex;
  p {
    color: #ffffff;
  }
`;

const ContentTitle = styled.div`
  width: 98%;
  color: #ffffff;
  font-size: 20px;
`;

const ContentLike = styled.div`
  width: 2%;
  cursor: pointer;
  /* background-color: red; */
  div {
    right: 10%;
  }
`;

export default memo(Content);
