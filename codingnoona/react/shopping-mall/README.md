<h3>CodingNoona React study</h3>

<b>part 5. 다섯번째 프로젝트: 쇼핑몰 웹사이트 만들기</b>

## todo list

- 유저는 메뉴와 상품들을 볼 수 있다
- 유저는 로그인을 할 수 있다
- 유저는 상품 디테일을 보기 위해 로그인을 해야 한다
- 로그인한 유저는 상품디테일정보를 볼 수 있다
- 유저는 상품을 검색할 수 있다
- 유저는 로그아웃을 할 수 있다

[로직순서]

- 1 전체상품페이지, 로그인, 상품상세페이지
- 1-1 네비게이션 바 만들기
- 2 전체 상품페이지에서는 전체 상품을 볼 수 있다.
- 3 로그인 버튼을 누르면 로그인 페이지가 나온다.
- 3 상품디테일을 눌렀으나, 로그인이 안됐을 경우에는 로그인 페이지가 나온다.
- 4 로그인이 되어있을 경우엔 상품 디테일 페이지를 볼 수 있다.
- 5 로그아웃 버튼을 클릭하면 로그아웃이 된다.
- 5 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
- 6 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
- 7 상품을 검색할 수 있다.

## study

- botstrap 한 줄 사이즈 12, 반으로 쪼개고 싶을 땐 6, 6
- Container : 아이템을 가운데로 모이게 해줌
- onSubmit : Form을 누르면 새로고침 (정보를 백엔드에 넘겨줘야 함) 를 사용할 때 (type이 submit일 때)는 onSubmit
- event.preventDefault(): Form이 refresh(새로고침) 되는 것을 막아주는 함수
- json-server 시작하는 방법 : json-server --watch db.json
- json-server --watch db.json --port 3004 : db.json을 이용해서 json-sever을 열어주셈
- useEffect: Function, array 두개의 매개변수
- onKeyPress

## note

- https://fontawesome.com/ 아이콘을 가져오는 사이트
- https://fontawesome.com/v5/docs/web/use-with/react 리액트 전용사이트
