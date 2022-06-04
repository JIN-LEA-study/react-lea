import Player from "./components/Player";
import styled from "styled-components";

function App() {
  return (
    <Wrap>
      <Player />
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
