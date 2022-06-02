## MERN STACK 커뮤니티

### React

- [o] Component
- [o] JSX
- [o] useState
- [] react-router-dom
- [] props
- [] useEffect

#### - Study Note

- rfce : function 기반 컴포넌트 생성가능
- 컴포넌트의 이름은 반드시 영어 대문자로 시작해야 함 (숫자 시작 X)
- 다른 컴포넌트가 사용할 수 있도록 export 해주어야 함
- 컴포넌트가 다른 컴포넌트를 사용하려면 import 해줘야 함
- JSX는 CamelCase를 사용해야 함 -> className
- js 코드를 사용할 때는 {} 를 사용

```js
const Temp = 7
<div>
  {Temp}
</div>
```

- css, style : {{}} + object

```js
<h1 className="" style={{ color: "red", fontSize: "3rem" }}></h1>
```

- 가정문: if-else, switch -> 삼항연산자를 사용

```js
let Flag = true;
return <div>{Flag ? "참입니다." : "거짓입니다"}</div>;
```

- 반복문: for -> map

```js
//key값을 idx(고유의 값)로 줌
let Arr = [1, 2, 3];
return (
  <div>
    {Arr.map((element, idx) => {
      return <p key={idx}>{element}</p>; // 1, 2, 3
    })}
  </div>
);
```

- useSatate() : 배열의 첫번째 인자 -> 변수의 이름, 두번째 인자 -> state를 바꿔주는 함수, useState 함수 인자 -> state의 초기 type, 값

```js
const [temp, setTemp] = useState(0); //초기값 0
<button onClick={() => setTemp(temp + 1)}>증가</button>;
```

- state의 값이 바뀌어도 화면이 재랜더링(새로고침)을 시킬 필요가 없음
- state의 값을 바꿀 때는 항상 setState를 사용해야 함
-

### Express/Mongoose/Style

### Post

### Authentication

### Reple

### ScaleUp

### Outtro

### Notice
