import React, { useState } from "react";
import styled from "styled-components";
import {
  Wrapper,
  Container,
  QuestionHeader,
  Title,
  Button,
  LogoImg,
  QuestionButton,
  ContentContainer,
} from "../style/styleCss";
// import { ProgressBar } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";

import { QuestionData } from "../assets/data/questionData";

const Question = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const navigate = useNavigate();

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((item) =>
      item.id === type ? { id: item.id, score: item.score + no } : item
    );

    setTotalScore(newScore);

    if (QuestionData.length !== questionNum + 1) {
      // 다음문제로 문제수 증가
      setQuestionNum(questionNum + 1);
    } else {
      // mbti도출
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      // 결과 페이지 이동
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }

    // if (type === "EI") {
    //   // 기존 스코어에 더할 값을 계산 (기존의 값 + 배점)
    //   const addScore = totalScore[0].score + no;
    //   // 새로운 객체
    //   const newObject = { id: "EI", score: addScore };
    //   // splice 통해 새로운 객체를 해당객체 자리에 넣어줌
    //   totalScore.splice(0, 1, newObject);
    // } else if (type === "SN") {
    //   const addScore = totalScore[1].score + no;
    //   const newObject = { id: "SN", score: addScore };
    //   totalScore.splice(1, 1, newObject);
    // } else if (type === "TF") {
    //   const addScore = totalScore[2].score + no;
    //   const newObject = { id: "TF", score: addScore };
    //   totalScore.splice(2, 1, newObject);
    // } else {
    //   const addScore = totalScore[3].score + no;
    //   const newObject = { id: "JP", score: addScore };
    //   totalScore.splice(3, 1, newObject);
    // }
  };

  return (
    <Wrapper>
      <Container>
        <LogoImg>
          <img alt="메인이미지" src={QuestionData[questionNum].image} />
        </LogoImg>
        <ContentContainer>
          {/* <ProgressBarScetion>
          <ProgressBar
            variant="warning"
            now={(questionNum / QuestionData.length) * 100}
            style={{ marginTop: "20px" }}
          />
        </ProgressBarScetion> */}
          <QuestionHeader>
            <span>Q{QuestionData[questionNum].id}</span>{" "}
            {QuestionData[questionNum].title}
          </QuestionHeader>
          <ButtonSection>
            <QuestionButton
              onClick={() =>
                handleClickButton(1, QuestionData[questionNum].type)
              }
            >
              {QuestionData[questionNum].answera}
            </QuestionButton>
            <QuestionButton
              onClick={() =>
                handleClickButton(0, QuestionData[questionNum].type)
              }
              style={{
                marginLeft: "20px",
              }}
            >
              {QuestionData[questionNum].answerb}
            </QuestionButton>
          </ButtonSection>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
};

export default Question;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  /* font-family: "S-CoreDream-3Light"; */
`;

const ProgressBarScetion = styled.div`
  background-color: red;
`;
