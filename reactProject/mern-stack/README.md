## MERN STACK 커뮤니티 [React/Express/Post/Authentication/Reple/ScaleUp/Outtro]

### React

- [o] Component
- [o] JSX
- [o] useState
- [o] react-router-dom
- [o] props
- [o] useEffect

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

```js
// 예시1
// useState [1,2,3] 배열 안에 4를 추가 하고 싶은 경우
const [temp, setTemp] = useState([1, 2, 3]);

<button
  onClcik={() => {
    let arr = [];
    arr = [...Temp]; // 배열을 복사 1,2,3
    arr.push(4); // 1,2,3,4
    setTemp([...arr]); // [1,2,3,4]
  }}
>
  증가
</button>;

// 예시2
const [temp, setTemp] = useState([]);
const [number, setNumber] = useSTate(0);

<button
  onClcik={() => {
    let arr = [];
    arr = [...Temp];
    arr.push(Number);
    setNuber(Number + 1);
    setTemp([...arr]); // [0,1,2,3,4,5...]
  }}
>
  증가
</button>;
```

- 삼항연산자와 버튼을 활용한 state

```js
//삼항연산자 활용
const [temp, setTemp] = useState(false);

return (
  <div>
    {
      temp ? <h1> Test </h1> : null
    }
    <button onClick=(()=>{
      setTemp(!temp);
    })> {temp ? '숨기기' : '보기'}
    </button>
  </div>
)
```

- state를 통한 input(form) 활용방법

```js
const [content, setContent] = useState('');
const onSubmit = () => {
  alert(content);
}

return (
  <div>
    <input type="text" value={content} onChange={(e)=>{
      setContent(e.currentTarget.value); //사용자가 입력한 값을 추적 가능
    }}/>
    <button
      style={{marginTop="1rem"}}
      onClick={() => {
        onSubmit();
      }}>제출</button>
  </div>
)
```

- useEffect() : 빈배열 안에는 state(조건)가 들어감, state가 바뀔 때마다 실행

```js
useEffect(
  () => {
    // 컴포넌트가 나타날 때 실행될 코드(mount)
    return () => {
      // 컴포넌트가 죽을 때 실행될 코드
    };
  },
  [
    /*useEffect가 실행될 조건, 빈배열일 경우 한번만 실행*/
  ]
);
```

### Express/Mongoose/Style

- [o] Express
- [o] MongoDB
- [o] axios & cors
- [o] Mongoose Model
- [o] React Bootstrap
- [o] Emotion

#### - Study Note

- [install] `npm install express --save`(Sever) (Express 홈페이지 참조)

```js
// "/" url, req : 요청 (클라이언트->서버), res : 응답(서버->클라이언트)
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

- [install] `npm run-script build`(Client) client에서 build 하는 방법
- [install] `npm i path --save` (Sever)
- `__dirname__dirname` 현재경로
- [install] `npm install nodemon --save ` 서버의 코드가 바뀌면 자동으로 알아서 서버를 껐다 켜주는 라이브러리
- JS에서 `*`은 모든 것을 의미
- [install] `npm i mongoose --save`
- 서로 포트가 다를 경우, 보안 규칙을 지켜줘야 함 (proxy 설정)
- [install] `npm i http-proxy-middleware`
- [install] `npm i @emotion/css @emotion/react @emotion/styled`
- [install] `npm i multer --save`

### Post

- [o] Create : 게시물 생성하기
- [o] Read : 게시물 불러오기
- [o] Update : 게시물 수정하기
- [o] Delete & Router : 게시물 삭제하기, 라우터

#### - Study Note

- useNavigate() : navigate(-1)를 넣어주면 뒤로가기 구현가능

```js
// accept : input으로 받는 파일을 지정해줄 수 있음
<Form.Control type="file" className="shadow-none" accept="image/*" />
```

### Authentication

### Reple

### ScaleUp

### Outtro

### Notice

- react-router-dom@6
