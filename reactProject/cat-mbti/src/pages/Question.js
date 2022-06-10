import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { questionData } from "../assets/data/questionData";

function Question() {
  const navigate = useNavigate();
  // 0번 인덱스부터 시작
  const [questionNum, setQuestionNum] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const handClickButton = (num, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + num } : s
    );

    setTotalScore(newScore);
    if (questionData.length !== questionNum + 1) {
      setQuestionNum(questionNum + 1);
    } else {
      navigate("/result");
    }
    // if (type === "EI") {
    //   //기존 스코어에 더할 값을 계산
    //   const addScore = totalScore[0].score + num;
    //   // 새로운 객체
    //   const newObj = { id: "EI", score: addScore };
    //   // splice 통해 새로우 ㄴ객체를 해당 객체 자리에 넣어줌
    //   totalScore.splice(0, 1, newObj);
    // } else if (type === "SN") {
    //   const addScore = totalScore[1].score + num;
    //   const newObj = { id: "SN", score: addScore };
    //   totalScore.splice(1, 1, newObj);
    // } else if (type === "TF") {
    //   const addScore = totalScore[2].score + num;
    //   const newObj = { id: "TF", score: addScore };
    //   totalScore.splice(2, 1, newObj);
    // } else {
    //   const addScore = totalScore[3].score + num;
    //   const newObj = { id: "JP", score: addScore };
    //   totalScore.splice(3, 1, newObj);
    // }
  };

  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNum / questionData.length) * 100}
        style={{ marginTop: "20px" }}
      />
      <Title>{questionData[questionNum].title}</Title>
      <ButtonSection>
        <Button
          style={{
            width: "40%",
            minHeight: "200px",
            fontSize: "15pt",
            marginRight: "20px",
          }}
          onClick={() => handClickButton(1, questionData[questionNum].type)}
        >
          {questionData[questionNum].answera}
        </Button>
        <Button
          style={{
            width: "40%",
            minHeight: "200px",
            fontSize: "15pt",
          }}
          onClick={() => handClickButton(0, questionData[questionNum].type)}
        >
          {questionData[questionNum].answerb}
        </Button>
      </ButtonSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* background-color: pink; */
  height: 100vh;
  width: 100%;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  text-align: center;
  font-family: "S-CoreDream-3Light";
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "S-CoreDream-3Light";
  margin-top: 50px;
`;

export default Question;
