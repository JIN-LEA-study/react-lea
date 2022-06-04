import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import Content from "./Content";
import Playbutton from "./Playbutton";
import { aviData } from "../Data/aviData";

const Player = (props) => {
  const [aviImg, setAviImg] = useState(aviData);
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <Container>
      <AviSection>
        {/* <Avi
          autoPlay
          src={process.env.PUBLIC_URL + `/public/avi/avi_2.mp4`}
          type="video/mp4"
        ></Avi> */}

        <Content />
        <Playbutton />
        <ContentSection>
          <ProgressBar></ProgressBar>
          <Controls></Controls>
        </ContentSection>
        <Img src="https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/900/014/80900014_1480412901845_1_600x600.JPG/dims/resize/Q_80,0" />
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
