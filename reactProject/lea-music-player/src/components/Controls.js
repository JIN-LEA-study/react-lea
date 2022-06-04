import React from "react";
import styled from "styled-components";
import {
  TbPlayerPlay,
  TbPlayerSkipBack,
  TbPlayerSkipForward,
} from "react-icons/tb";

const Controls = () => {
  return (
    <ControlsScetion>
      <SectionDiv>
        <TbPlayerSkipBack
          size="45px"
          color="rgba(255, 255, 255, 0.8)"
          cursor="pointer"
        />
        <TbPlayerPlay
          size="45px"
          color="rgba(255, 255, 255, 0.8)"
          cursor="pointer"
        />
        <TbPlayerSkipForward
          size="45px"
          color="rgba(255, 255, 255, 0.8)"
          cursor="pointer"
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
  /* position: absolute; */
  top: 90%;
`;

const SectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  /* background-color: red; */
`;
export default Controls;
