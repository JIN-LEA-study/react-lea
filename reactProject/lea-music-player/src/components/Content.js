import React from "react";
import styled from "styled-components";

// Ant Design Icons
import { AiFillCustomerService, AiFillStar } from "react-icons/ai";
// AiOutlineStar, AiOutlineReload 빈하트

const Content = () => {
  return (
    <ContentSection>
      <ContentTitle>
        <AiFillCustomerService color="#ffffff" size="20px" />
        &nbsp; 한요한 - 이게나야
      </ContentTitle>
      <ContentLike>
        <AiFillStar color="#ffffff" size="30px" />
      </ContentLike>
    </ContentSection>
  );
};

const ContentSection = styled.div`
  width: 90%;
  top: 10%;
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

export default Content;
