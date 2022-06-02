import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PinkButton } from "./components/PinkButton";
import { next } from "./store/modules/score";
import { Quiz } from "./components/Quiz";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  max-width: 360px;
  margin: auto;
  text-align: center;
  /* display: felx;
  justify-content: center; */
`;

const MainImg = styled.img`
  width: inherit;
  margin-bottom: 30px;
`;
const Header = styled.h1`
  margin-bottom: 30px;
  margin-top: 0;
`;
const SubHeader = styled.h2`
  font-size: 1.1em;
  color: #a3b0b7;
  font-weight: 400;
  margin: 30px 0;
  margin-bottom: 30px;
`;

function App() {
  const page = useSelector((state) => state.score.page);
  const dispatch = useDispatch();
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
      {page > 0 && (
        <Main>
          <Quiz />
        </Main>
      )}
    </>
  );
}

export default App;
