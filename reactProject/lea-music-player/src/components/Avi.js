import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Avi = () => {
  const playList = useSelector((state) => state.playList);
  const currentIndex = useSelector((state) => state.currentIndex);

  return (
    <>
      <AviSection loop autoPlay>
        <soure
          loop
          autoPlay
          src={playList[currentIndex].avi}
          type="video/mp4"
        />
      </AviSection>
    </>
  );
};

const AviSection = styled.video`
  width: 100%;
  object-fit: cover;
  /* position: absolute; */
`;

export default Avi;
