import styled from "styled-components";

function App() {
  return (
    <Father>
      <Btn>Log in</Btn>
      <Btn as="a">Log in</Btn>
    </Father>
  );
}

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Link = styled(Btn)``;

export default App;
