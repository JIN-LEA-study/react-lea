import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
  memo,
} from "react";
import styled from "styled-components";
import { nextMV, playMV, stopMV } from "../store/mvPlayerList";
import { useDispatch, shallowEqual, useSelector } from "react-redux";

function ProgressBar(props, ref) {
  const audio = useRef();
  const progressBar = useRef();
  const dispatch = useDispatch();
  const { playList, currentIndex } = useSelector(
    (state) => ({
      palyList: state.palyList,
      currentIndex: state.currentIndex,
    }),
    shallowEqual
  );
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");

  useImperativeHandle(ref, () => ({
    paly: () => {
      audio.current.play();
    },
    pause: () => {
      audio.current.pause();
    },
    restDuration: () => {
      audio.current.currentTime = 0;
    },
  }));

  const onPlay = useCallback(() => {
    dispatch(playMV());
  }, [dispatch]);

  const getTime = useCallback((time) => {
    const minutes = `0${parseInt(time / 60, 10)}`;
    const seconds = `0${parseInt(time / 60)}`;
    return `${minutes}:${seconds.slice(-2)}`;
  }, []);

  const onClickProgress = useCallback((event) => {
    const progressBarWidth = event.currentTarget.clientWidth;
    const offsetX = event.nativeEvent.offsetX;
    const duration = audio.current.duration;
    audio.current.currentTime = (offsetX / progressBarWidth) * duration;
  }, []);

  const onTimeUpdate = useCallback(
    (event) => {
      if (event.target.readyState === 0) return;
      const currentTime = event.target.currentTime;
      const duration = event.target.duration;
      const progressBarWidth = (currentTime / duration) * 100;
      progressBar.current.style.width = `${progressBarWidth}%`;
      setCurrentTime(getTime(currentTime));
      setDuration(getTime(duration));
    },
    [getTime]
  );

  const onPause = useCallback(() => {
    dispatch(stopMV());
  }, [dispatch]);

  const onEnded = useCallback(() => {
    dispatch(nextMV());
  }, [dispatch]);
  return (
    <ProgressBarScetion>
      {/* <ProgressBarScetion onMouseDown={onClickProgress}> */}
      <ProgressBarArea>
        <ProgressBarUI />
        {/* <ProgressBarArea ref={progressBar}> */}
        {/* <ProgressBarUI
          autoPlay
          onPlay={onPlay}
          onTimeUpdate={onTimeUpdate}
          onPause={onPause}
          onEnded={onEnded}
          src={playList[currentIndex].src}
          ref={audio}
        ></ProgressBarUI> */}
      </ProgressBarArea>
      <ProgressBarTime>
        <div>{currentTime}</div>
        <div>{duration}</div>
      </ProgressBarTime>
    </ProgressBarScetion>
  );
}

const ProgressBarScetion = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* position: absolute; */

  background-color: transparent;
  /* background-color: red; */
`;

const ProgressBarArea = styled.div``;

const ProgressBarUI = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 15%;
  background-color: #ffffff;
  /* background-color: rgba(255, 255, 255, 0.8); */
`;
const ProgressBarTime = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  div {
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

export default memo(forwardRef(ProgressBar));
