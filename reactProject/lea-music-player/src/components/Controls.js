import React, { memo, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
//Typicons
import {
  TiMediaPlay,
  TiMediaFastForward,
  TiMediaRewind,
  TiMediaPause,
} from "react-icons/ti";
import { nextMV, prevMV, setRepeat } from "../store/mvPlayerList";

const Controls = ({ resetDuration, play, pause }) => {
  const playing = useSelector((state) => state.playing);
  const repeat = useSelector((state) => state.repeat);
  const dispatch = useDispatch();
  const onClickPlay = useCallback(() => {
    play();
  }, [play]);

  const onClickPause = useCallback(() => {
    pause();
  }, [pause]);

  // const onClickPrevious = useCallback(() => {
  //   if (repeat === "ONE") {
  //     resetDuration();
  //   } else {
  //     dispatch(prevMV());
  //   }
  // }, [repeat, resetDuration, dispatch]);

  // const onClickNext = useCallback(() => {
  //   if (repeat === "ONE") {
  //     resetDuration();
  //   } else {
  //     dispatch(nextMV());
  //     console.log(onClickNext());
  //   }
  // }, [repeat, resetDuration, dispatch]);

  const onClickPrevious = useCallback(() => {
    dispatch(prevMV());
  }, [dispatch]);

  const onClickNext = useCallback(() => {
    dispatch(nextMV());
    console.log(onClickNext());
  }, [dispatch]);

  return (
    <ControlsScetion>
      <SectionDiv>
        <TiMediaRewind
          size="45px"
          cursor="pointer"
          color="rgba(255, 255, 255, 0.8)"
          onClick={onClickPrevious}
        />
        {playing ? (
          <TiMediaPause
            size="45px"
            cursor="pointer"
            color="rgba(255, 255, 255, 0.8)"
            onClick={onClickPause}
          />
        ) : (
          <TiMediaPlay
            cursor="pointer"
            size="45px"
            color="rgba(255, 255, 255, 0.8)"
            onClick={onClickPlay}
          />
        )}

        <TiMediaFastForward
          size="45px"
          color="rgba(255, 255, 255, 0.8)"
          cursor="pointer"
          onClick={onClickNext}
        />
      </SectionDiv>
    </ControlsScetion>
  );
};

const ControlsScetion = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50%;
  background-color: transparent;
  position: absolute;
  top: 85%;
  z-index: 100px;
`;

const SectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  /* background-color: red; */
`;
export default memo(Controls);
