<h3>CodingNoona React study</h3>

<b>Part 1. 리액트의 기초</b>

<b>todo list</b>

<ul>
    <li>[o] 리액트란? </li>
    <li>[o] NodeJS 설치 </li>
    <li>[o] component </li>
    <li>[o] props </li>
    <li>[o] state </li>
</ul>

<b>study</b>

- SPA : Single Page Application
- index.js : index.html + App.js 연결
- JSX에서는 div를 하나로 묶어줘야 한다.
- rafce : React Arrow Funciton Export Componet
- component : 내가 원하는 태그들을 모아 하나의 태그로 사용 가능 (재사용 가능)
- props : 함수의 매개변수와 같은 존재, 내가 보낸 값이 객체 안에 매개변수로 들어가있음
- react는 state에 반응한다
- state : 값이 변할 때마다 UI update
- useState() : state를 사용할 때 사용 (리액트 훅 : 리액트에서 제공하는 함수)
- const[a, b] = useState(); a = 초기값이 닮긴 state, b = state값을 변경해주는 함수
- state의 엄청난 비밀 : setState는 비동기적, set함수를 하고 바로 그 state를 이용하면 계속 그 전이 값이 나옴 but 변수는 값을 바꾸면 바로 적용이 됨
- set함수를 실행하면서 변수는 초기화(re render)
- 잠깐 기억해야 하는 값을 쓸 때 변수 사용
- rcc : react Class Component
