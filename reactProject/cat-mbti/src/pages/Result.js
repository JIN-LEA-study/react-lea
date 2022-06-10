import React from "react";
import styled from "styled-components";
import Summer from "../assets/KakaoTalk_Photo_2021-09-13-15-30-10 002.jpg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { resultData } from "../assets/data/resultData";

function Result() {
  const navigate = useNavigate();
  const handleClickButton = () => {
    //페이지 이동
    navigate("/");
  };
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과보기</Title>
        <LogoImg>
          <img
            src={resultData[0].image}
            className="rounded-circle"
            width="350px"
            height="350px"
          />
        </LogoImg>
        <Desc>
          예비집사님과 찰떡궁합인 고양이는 <b>{resultData[0].name}</b>입니다
        </Desc>
        <Button variant="light" onClick={() => navigate("/")}>
          Test again
        </Button>
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: pink;
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "yg-jalnan";
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "S-CoreDream-3Light";
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  font-family: "S-CoreDream-3Light";
`;

const LogoImg = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  font-family: "S-CoreDream-3Light";
`;

export default Result;
