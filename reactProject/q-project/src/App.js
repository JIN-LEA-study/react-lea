import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PinkButton } from "./components/PinkButton";
import { next, reset } from "./store/modules/score";
import { Quiz } from "./components/Quiz";
import styled from "styled-components";
import "./App.css";

const Main = styled.main`
  width: 100%;
  max-width: 360px;
  padding: 30px 0;
  margin: auto;
  text-align: center;
  font-family: "Jua";
`;

const MainImg = styled.img`
  width: inherit;
  font-family: "Jua";
`;
const Header = styled.h1`
  margin-bottom: 30px 0;
  margin-top: 30px;
  font-family: "Jua";
`;
const SubHeader = styled.h2`
  font-size: 1.1em;
  color: #a3b0b7;
  font-weight: 400;
  margin: 20px 0;
  margin-bottom: 30px;
  font-family: "Jua";
`;

const Score = styled.div`
  font-size: 4em;
  color: #b18597;
  font-family: "Jua";
`;

function App() {
  const score = useSelector((state) => state.score.score);
  const page = useSelector((state) => state.score.page);
  const dispatch = useDispatch();
  const quizs = useSelector((state) => state.score.quizs);
  return (
    <>
      {page === 0 && (
        <Main>
          <MainImg
            src="https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3eW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="뉴욕 풍경"
          />
          <Header>나라별 수도 퀴즈</Header>
          <SubHeader>진정한 수도 고인물도 100점을 맞기 어렵습니다!</SubHeader>
          <PinkButton
            text="테스트 시작"
            clickEvent={() => {
              dispatch(next());
            }}
          />
        </Main>
      )}
      {page > 0 && page <= quizs.length && (
        <Main>
          <Quiz />
        </Main>
      )}
      {page > quizs.length && (
        <Main>
          <Header>당신의 수도 퀴즈 점수는?</Header>
          <Score>{score}점</Score>
          <SubHeader></SubHeader>
          <PinkButton
            text="다시 테스트하기"
            clickEvent={() => {
              dispatch(reset());
            }}
          />
        </Main>
      )}
    </>
  );
}

export default App;
