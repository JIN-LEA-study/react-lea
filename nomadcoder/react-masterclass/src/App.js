import styled from "styled-components";

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true, minlength: 10 })`
  background-color: tomato;
`;

export default App;
