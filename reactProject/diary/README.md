# Diary with React

#### - intall

- react-router-dom@6

#### - study note

- useSearchParams : URL과 함께 Date 전달
- useParams : (custom hooks)
- Query : 웹 페이지에서 데이터를 전달하는 가장 간단한 방법 (Query String)
- font-family 속성은 가장 뒤에 있는 속성을 따른다
- `process.env.PUBLIC_URL` public directory 경로를 바로 쓸 수 있는 명령어
- `white-space: nowrap;` button 안의 글자가 두줄이 안되게 해주는 속성
- type을 잘못 입력하거나, 배열 안에 없는 type을 입력했을 때 default로 보여줄 값 넣기

```js
// 이 안에 typ이 있다면 타입 그대로 반환, 없다면 default
const btnType = ["positive", "negative"].includes(type) ? type : "dafault";
```
