import React, { useCallback, useRef } from "react";

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
        {/* <Playbutton /> */}
        <ContentSection>
          <ProgressBar ref={audioRef}></ProgressBar>
          {/* <ProgressBar></ProgressBar> */}
          <Controls
            play={onPlay}
            pause={onPause}
            resetDuration={resetDuration}
          ></Controls>
        </ContentSection>
        <Avi loop autoPlay src={playList[currentIndex].avi} type="video/mp4" />
        {/* <Img src={playList[currentIndex].img} /> */}
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
  top: 75%;
  height: 20%;
  /* background-color: rgba(255, 255, 255, 0.3); */
  position: absolute;
  border-radius: 20px;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

// const ContentTitle = styled.div`
//   width: 90%;
//   top: 10%;
//   height: 5%;
//   position: absolute;
//   background-color: white;
// `;
export default Player;
