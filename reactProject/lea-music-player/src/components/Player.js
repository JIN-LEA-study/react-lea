import React, { useCallback, useRef, useState } from "react";

import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import Content from "./Content";
import Playbutton from "./Playbutton";
import { useSelector } from "react-redux";

const Player = () => {
  const audioRef = useRef();
  const playList = useSelector((state) => state.playList);
  const currentIndex = useSelector((state) => state.currentIndex);

  const onPlay = useCallback(() => {
    audioRef.current.play();
  }, []);
  const onPause = useCallback(() => {
    audioRef.current.pause();
  }, []);
  const resetDuration = useCallback(() => {
    audioRef.current.resetDuration();
  }, []);

  return (
    <Container>
      <AviSection>
        <Content />
        <ContentSection>
          {/* <ProgressBar ref={audioRef}></ProgressBar> */}
        </ContentSection>
        <Avi
          loop
          // muted
          autoPlay
          src={playList[currentIndex].avi}
          type="video/mp4"
          ref={audioRef}
        />
        <Controls
          play={onPlay}
          pause={onPause}
          resetDuration={resetDuration}
        ></Controls>
      </AviSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 650px;
  /* background-color: whitesmoke; */
`;

const AviSection = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 20px;
`;

const Avi = styled.video`
  width: 100%;
  object-fit: cover;
  /* position: absolute; */
`;

const ContentSection = styled.div`
  width: 90%;
  top: 85%;
  height: 20%;
  /* background-color: rgba(255, 255, 255, 0.3); */
  position: absolute;
  border-radius: 20px;
`;

export default Player;
