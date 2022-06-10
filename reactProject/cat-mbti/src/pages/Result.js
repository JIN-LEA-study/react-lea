import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { ResultData } from "../assets/data/resultData";
import { useSearchParams, useNavigate } from "react-router-dom";

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
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img
            alt="결과이미지"
            src={resultData.image}
            className="rounded-circle"
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>예비 집사님과 찰떡궁합인 고양이는 {resultData.name}입니다.</Desc>
        <DescContent>{resultData.desc}</DescContent>
        <ButtonSection>
          <Button
            variant="light"
            style={{ fontFamily: "S-CoreDream-3Light", width: 170 }}
            onClick={() => navigate("/")}
          >
            Test Again!
          </Button>
          <Button
            style={{
              fontFamily: "S-CoreDream-3Light",
              width: 170,
              marginLeft: "10px",
            }}
            data={resultData}
          >
            카카오톡 공유하기
          </Button>
        </ButtonSection>
      </Contents>
    </Wrapper>
  );
};

export default Result;

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
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  font-family: "S-CoreDream-3Light";
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  font-family: "yg-jalnan";
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const DescContent = styled.div`
  font-family: "S-CoreDream-3Light";
`;
