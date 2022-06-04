import React, { useRef } from "react";
import { useImperativeHandle, ForwardedRef } from "react";
import "./ProgressArea.scss";
function ProgressArea(props, ref) {
  const audio = useRef();
  useImperativeHandle(ref, () => ({
    paly: () => {
      audio.current.play();
    },
    pause: () => {
      audio.current.pause();
    },
  }));
  return (
    <div className="progress-area">
      <div className="progress-bar">
        <audio autoPlay ref={audio}></audio>
      </div>
      <div className="music-timer">
        <span>00:00</span>
        <span>00:00</span>
      </div>
    </div>
  );
}

export default ProgressArea(ForwardedRef);
