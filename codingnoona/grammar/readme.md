<h3>CodingNoona React study</h3>

리액트에서 자주 사용되는 문법 정리

<b>study</b>

- 키와 키값에 들어가는 변수의 이름이 같다면 변수 이름만 사용하여 짧게 쓸 수 있다.
- spread : ...을 이용, 객체를 복사해서 새로운 객체 생성
- 삼항연산자 : cat ? cat.name : 'there is no cat'
- 많은 개발 문서들이 class 컴포넌트로 작성이 되어져 있다.
- 리액트에서 제공되는 유용한 함수 : lifecycle function이 class 컴포넌트에서만 동작이 됨
- 2019년부터 function component 가 각광 받고 있음, 현재는 function을 더 추천
- class component는 this를 매번 써줘야함, this의 연속
- class component는 state를 한번에 만들어서 관리
- lifecycle function: Mountion (로드될 때) / Updating (state가 업데이트 되고 UI 업데이트 될 때) / Unmountion (컴포넌트가 종료될 때)
- constructure()가 첫번째로 실행되는 lifecycle 함수, state를 만든다.
- render() : UI를 그려주는 함수, state 업데이트 되거나 props가 새로 전달할 때
- componentDidMount() : UI가 완벽하게 세팅해줬을 때 알려주는 함수, Api호출 작업
- componentUpdate() : state가 완전히 업데이트가 됐는지? 알려주는 함수. render 다음 단계 (최신 업데이트 값을 확인할 수 있음)
- JS와 HTML 같이 작업하고 싶을 땐 대괄호{} 안에 JS를 써줘야 한다.
- && 연산자로 조건부 렌더링 가능
