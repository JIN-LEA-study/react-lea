import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slide from "./Slide";
import mv1 from "./avi/avi_1.mp4";
import mv2 from "./avi/avi_2.mp4";
import {
  TiMediaPlay,
  TiMediaFastForward,
  TiMediaRewind,
  TiMediaPause,
} from "react-icons/ti";

import mv3 from "./avi/avi_3.mp4";

const TOTAL_SLIDES = 2; // 전체 슬라이드 개수(총3개. 배열로 계산)

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <Container>
      <ContentSection>ㅎ2</ContentSection>
      {/* <Text>
        <p>{currentSlide + 1}번 째 사진</p>
      </Text> */}
      <ControlsSection>
        <SectionDiv>
          <TiMediaRewind
            type="button"
            size="45px"
            color="rgba(255, 255, 255, 0.8)"
            cursor="pointer"
            onClick={PrevSlide}
          ></TiMediaRewind>
          <TiMediaFastForward
            type="button"
            size="45px"
            color="rgba(255, 255, 255, 0.8)"
            cursor="pointer"
            onClick={NextSlide}
          ></TiMediaFastForward>
        </SectionDiv>
      </ControlsSection>

      <SliderContainer ref={slideRef}>
        <Slide avi={mv1} />
        <Slide avi={mv2} />
        <Slide avi={mv3} />
      </SliderContainer>
    </Container>
  );
}
const Container = styled.div`
  /* width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  border-radius: 20px;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다. */
  width: 850px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;
const SliderContainer = styled.div`
  /* background-color: red;
  margin-bottom: 2em; */
  display: flex; // 이미지들을 가로로 나열합니다.
`;
const Text = styled.div`
  /* text-align: center;
  color: burlywood;
  p {
    color: #fff;
    font-size: 20px;
    background-color: burlywood;
    display: inline-block;
    border-radius: 50px;
    padding: 0.5em 1em;
  } */
`;

const ContentSection = styled.div`
  width: 100%;
  height: 10%;
  background-color: transparent;
`;
const ControlsSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10%;
  background-color: transparent;
`;

const SectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`;
