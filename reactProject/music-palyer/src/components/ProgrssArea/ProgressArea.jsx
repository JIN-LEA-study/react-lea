import React, { useRef } from "react";
import { useImperativeHandle, ForwardedRef } from "react";
import "./ProgressArea.scss";
import music1 from "../../music/music-1.mp3";
import { useDispatch } from "react-redux";
import { playMusic } from "../../store/musicPlayerReducer";
import { stopMusic } from "../../store/musicPlayerReducer";

function ProgressArea(props, ref) {
  const dispatch = useDispatch();
  const audio = useRef();
  useImperativeHandle(ref, () => ({
    paly: () => {
      audio.current.play();
    },
    pause: () => {
      audio.current.pause();
    },
  }));
  const onPlay = () => {
    dispatch(playMusic());
  };
  const onPause = () => {
    dispatch(stopMusic());
  };

  return (
    <div className="progress-area">
      <div className="progress-bar">
        <audio
          autoPlay
          ref={audio}
          src={music1}
          onPaly={onPlay}
          onPause={onPause}
        ></audio>
      </div>
      <div className="music-timer">
        <span>00:00</span>
        <span>00:00</span>
      </div>
    </div>
  );
}

export default ProgressArea(ForwardedRef);
