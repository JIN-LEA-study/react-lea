import React, { useRef } from "react";
import "./App.scss";
import PlayList from "./components/PlayList/PlayList";
import ProgressArea from "./components/ProgrssArea/ProgressArea";
import Controls from "./components/Controls/Controls";
import SongDetail from "./components/SongDetail/SongDetail";

function App() {
  const audioRef = useRef();
  const onPlay = () => {
    audioRef.current.paly();
  };
  const onPause = () => {
    audioRef.current.pause();
  };
  return (
    <div className="App">
      <div className="container">
        <SongDetail />
        <ProgressArea ref={audioRef} />
        <Controls paly={onPlay} pause={onPause} />
        <PlayList />
      </div>
    </div>
  );
}

export default App;
