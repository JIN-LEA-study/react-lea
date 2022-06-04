import React from "react";
import styled from "styled-components";
// Ant Design Icons
import { AiFillPlayCircle } from "react-icons/ai";

const Playbutton = () => {
  return (
    <PlayButtonSection>
      <AiFillPlayCircle color="#ffffff" size="90px" />
    </PlayButtonSection>
  );
};

const PlayButtonSection = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  top: 40%;
  position: absolute;
`;
export default Playbutton;
