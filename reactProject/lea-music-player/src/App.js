import Player from "./components/Player";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <Wrap>
      <Player />
    </Wrap>
  );
}

const Wrap = styled.div`
  //μ€μμμΉ
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export default App;
