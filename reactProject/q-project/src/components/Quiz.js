import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BlueButton } from "./BlueButton";
import { ProgressBar } from "./ProgressBar";
import { check, next } from "../store/modules/score";

export function Quiz() {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.score.quizs);
  const page = useSelector((state) => state.score.page);

  return (
    <>
      <h1 style={{ margin: "50px 0" }}>{quiz[page - 1].q}</h1>
      {quiz[page - 1].a.map((item) => {
        return (
          <BlueButton
            text={item.text}
            key={item.text}
            clickEvent={() => {
              //정답체크
              dispatch(check(item.isCorrect));
              //다음 페이지로 이동
              dispatch(next());
            }}
          />
        );
      })}
      <ProgressBar page={page} maxPage={quiz.length} />
    </>
  );
}
