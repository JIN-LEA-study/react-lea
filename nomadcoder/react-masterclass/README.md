###

- styled-componets를 사용할 때 div, button과 같은 styled.(HTML)을 변경하고 싶을 땐 as를 사용하면 된다.

```js
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Link = styled(Btn)``;

function App() {
  return (
    <Father>
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
    </Father>
  );
}
```
