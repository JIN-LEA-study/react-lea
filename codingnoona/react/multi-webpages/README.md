## CodingNoona React study

<b>part 4. 세번째 프로젝트: 라우터를 이용한 멀티 웹페이지만들기</b>

## todo list

- 라우터란? 여러 웹페이지를 만드는 지름길
- Link, Navigate : 페이지 사이를 이동하는 법
- Restful Route
- useParams : URL의 파라미터값을 읽어오자
- useSearchParams : URL 쿼리값을 읽어오자
- Redirect : 페이지를 보호하는 법

<b>로직 순서</b>

1.

## study

- Route : 경로
- Routes: 각각의 페이지를 스위치하는 역할을 해준다(버전5에선 스위치)
- Route: 각각의 페이지를 정의
- Link, navigate(함수안에서 사용하게 될 경우) : 원하는 페이지로 이동
- restful route: URL design
- HTTP Verb : GET: fetch해서 데이터를 가져올 때 쓰는 명령어, POST : 새로운 데이터를 만들어낼 때 사용하는 명령어 , PUT: 수정, DELETE: 삭제
- /:id : 파라미터(가변적인 값) : id값을 입력해주면 동적으로 사용 가능
- useParams(): /:id로 사용한 id값을 가져올 수 있다
- ? : ? 뒤에 들어가는 조건들은 쿼리라고 함, 추가적인 조건과 정보를 보낼 때 사용, ? 쿼리 뒤에 있는 값은 url 경로에 영향을 미치지 않는다. 선택적인 정보임
- useSearchParams() : query 값 가지고 올 때 사용
- useNavigate()와 Navigate는 다름
- Navigate : 컴포넌트

## note

-
