import "./App.css";
import styled from "styled-components";
import Slider from "./components/Slider";

function App() {
  return (
    <Wrap>
      <Slider />
    </Wrap>
  );
}

const Wrap = styled.div`
  //중앙위치
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
export default App;
