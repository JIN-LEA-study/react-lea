import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😃</Emoji>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
} 50% {
  border-radius: 100px}
100% {
  transform: rotate(360deg);
  border-radius: 0px;
}

`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Emoji} {
    font-size: 36px;
    &:hover {
      font-size: 98px;
    }
  }
`;
export default App;
