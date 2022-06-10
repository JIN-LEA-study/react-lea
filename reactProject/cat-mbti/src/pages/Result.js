import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Wrapper,
  Container,
  Button,
  LogoImg,
  ResultHeader,
  QuestionHeader,
  DescContent,
  ContentContainer,
} from "../style/styleCss";
import { ResultData } from "../assets/data/resultData";
import { useSearchParams, useNavigate } from "react-router-dom";
import KakaoShareButton from "../component/KakaoShareButton";

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  // 최종결과
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    const result = ResultData.find((item) => item.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Container>
        <LogoImg>
          <img alt="결과이미지" src={resultData.image} />
        </LogoImg>
        <ContentContainer>
          <QuestionHeader>
            예비 집사님과 찰떡궁합인 고양이는 '<span>{resultData.name}</span>'
            입니다.
          </QuestionHeader>
          <DescContent>{resultData.desc}</DescContent>
          <ButtonSection>
            <Button onClick={() => navigate("/")}>Again!</Button>
            {/* <KakaoShareButton data={resultData} /> */}
          </ButtonSection>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
};

export default Result;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;
