import React from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { questionData } from "../assets/data/questionData";

function Question() {
  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={80}
        style={{ marginTop: "20px" }}
      />
      <Title>{questionData[0].title}</Title>
      <ButtonSection>
        <Button
          style={{
            width: "40%",
            minHeight: "200px",
            fontSize: "15pt",
            marginRight: "20px",
          }}
        >
          {questionData[0].answerA}
        </Button>
        <Button
          style={{
            width: "40%",
            minHeight: "200px",
            fontSize: "15pt",
          }}
        >
          {questionData[0].answerB}
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
`;

export default Question;
