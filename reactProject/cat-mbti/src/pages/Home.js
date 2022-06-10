import React from "react";
import styled from "styled-components";
import {
  Wrapper,
  Container,
  Header,
  Title,
  Button,
  LogoImg,
  ContentContainer,
} from "../style/styleCss";
import Summer from "../assets/KakaoTalk_Photo_2021-09-13-15-30-10 002.jpg";
// import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClickButton = () => {
    //페이지 이동
    navigate("/question");
  };
  return (
    <Wrapper>
      <Container>
        <LogoImg>
          <img alt="메인이미지" src={Summer} />
        </LogoImg>
        <ContentContainer>
          <Header>고양이를 사랑하는 당신! 당신과 찰떡궁합 주인님은~?</Header>
          <Title>
            집사의 MBTI를 기반으로 하는 <b>나랑 잘맞는 고양이</b> 찾기
          </Title>
          <Button style={{ marginTop: "40px" }} onClick={handleClickButton}>
            Go! Test
          </Button>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
}

export default Home;
