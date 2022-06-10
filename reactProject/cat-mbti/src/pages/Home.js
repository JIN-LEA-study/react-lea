import React from "react";
import styled from "styled-components";
import Summer from "../assets/KakaoTalk_Photo_2021-09-13-15-30-10 002.jpg";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImg>
          <img
            src={Summer}
            className="rounded-circle"
            width="350px"
            height="350px"
          />
        </LogoImg>
        <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기</Desc>
        <Button>Go! Test</Button>
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
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
`;

const LogoImg = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
`;

export default Home;