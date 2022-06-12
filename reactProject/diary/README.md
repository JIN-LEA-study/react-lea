# Diary with React

#### - intall

- react-router-dom@6

#### - study note

- useSearchParams : URL과 함께 Date 전달
- useParams : (custom hooks)
- Query : 웹 페이지에서 데이터를 전달하는 가장 간단한 방법 (Query String)
- font-family 속성은 가장 뒤에 있는 속성을 따른다
- `process.env.PUBLIC_URL` public directory 경로를 바로 쓸 수 있는 명령어

```js
const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";
```

- `white-space: nowrap;` button 안의 글자가 두줄이 안되게 해주는 속성
- type을 잘못 입력하거나, 배열 안에 없는 type을 입력했을 때 default로 보여줄 값 넣기

```js
// 이 안에 typ이 있다면 타입 그대로 반환, 없다면 default
const btnType = ["positive", "negative"].includes(type) ? type : "dafault";
```

- getMonth는 0월부터 시작이기 때문에 +1을 해주어야 한다

```js
${curDate.getMonth()+1}
```

- JSON.parse, JSON.stringify (원본 복사) : JSON화 시켜서 문자열로 바꿈(stringfy) -> 문자열 반환을 다시 문자열로 복구(parse)

```js
const copyList = JSON.parse(JSON.stringify(diaryList));
```

- parseInt : 문자열 -> 숫자
- state 작업을 하는 경우, 개발자 도구에서 Components를 확인하면서 state가 잘 작동하는지 확인해야 됨

- display: flex 남은 모든 넓이를 차지

```
flex-gow: 1;
```

- 글자 길이제한을 줄 때 slice 사용

```js
<div className="diary_content_preview">{content.slice(0, 25)}</div>
```
