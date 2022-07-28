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

- input의 required 속성은 폼 데이터가 서버로 제출되기 전 반드시 채워져야 하는 입력 필드를 명시한다. (필수값)
