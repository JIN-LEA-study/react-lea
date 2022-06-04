import Player from "./components/Player";
import styled from "styled-components";
import "./App.css";
import aviData from "./Data/aviData";

function App() {
  return (
    <Wrap>
      <Player aviData={aviData} />
    </Wrap>
  );
}

const Wrap = styled.div`
  //중앙위치
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export default App;
