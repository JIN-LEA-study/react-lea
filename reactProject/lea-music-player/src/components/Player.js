import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import { avidata } from "../Data/avidata";

const Player = () => {
  return (
    <Container>
      <AviSection>
        <Avi autoPlay src="../avi/avi_1.mp4" type="video/mp4"></Avi>
      </AviSection>
      <ProgressBar></ProgressBar>
      <Controls></Controls>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 650px;
  /* background-color: whitesmoke; */
`;

const AviSection = styled.div`
  width: 100%;
  height: 80%;
`;

const Avi = styled.video`
  width: 100%;
  /* position: absolute; */
`;

export default Player;
