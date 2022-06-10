import React from "react";
import styled from "styled-components";
import {
  Wrapper,
  Container,
  Header,
  Title,
  Button,
  LogoImg,
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
          <img
            alt="메인이미지"
            src={Summer}
            // className="rounded-circle"
            width={350}
            height={350}
          />
        </LogoImg>
        <Header>당신과 찰떡궁합 주인님은~?</Header>

        <Title>
          MBTI를 기반으로 하는 <b>나랑 잘맞는 고양이</b> 찾기
        </Title>
        <Button style={{ marginTop: "20px" }} onClick={handleClickButton}>
          Go! Test
        </Button>
      </Container>
    </Wrapper>
  );
}

export default Home;
