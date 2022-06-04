import React from "react";

import styled from "styled-components";

const ProgressBar = () => {
  return (
    <ProgressBarScetion>
      <ProgressBarUI></ProgressBarUI>
      <ProgressBarTime>
        <div>00:00</div>
        <div>00:00</div>
      </ProgressBarTime>
    </ProgressBarScetion>
  );
};

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

const ProgressBarUI = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 15%;
  background-color: rgba(255, 255, 255, 0.8);
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

export default ProgressBar;
