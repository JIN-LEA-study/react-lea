### Wallpaper search engine with React

#### todolist

[**기본**]

1. Open API 연동하기

-   env 만들어서 관리하기
-   URLSearchParams 활용하기

2. 배경화면 검색 기능

-   검색하지 않아도 최초 1회 이미지 가져오기
-   Enter를 누르면 입력한 검색어로 이미지 검색
-   검색 후 input값이 빈 문자열 상태
-   검색 결과가 없을 경우, EmptyResult 컴포넌트 활용해서 검색 결과 없음 표시하기/pagination 안보이게 하기

3. 최근 검색어 기능

-   검색이 일어날 때마다 enter 최근 검색어가 추가
-   최근 검색어를 클릭하면 해당 검색어로 검색이 실행되고, 검색창에 input값 역시 해당 검색어로 변경
-   최근 검색어의 x 버튼을 클릭하면 해당 검색어가 삭제
-   새로고침을 하거나 새 창을 열어도 직전의 최근 검색어들이 유지

4. 검색 옵션 (정렬/필터링)
5. 페이지네이션
6. 배경화면 상세 보기 모달
7. 반응형 레이아웃과 다크모드

[**심화**]

1. 무한 스크롤 구현
2. 웹 성능 측정
3. 웹 성능 개선
4. Debounce를 사용한 로딩 최적화
5. 컴포넌트 기능 단위 리팩토링
6. 모듈 구조 리팩토링
7. 타입스크립트 적용
8. React 툴체인(CRA)
9. CRA 설정 파악
10. CSS 전처리기
11. Unit Test

#### study note

-   api는 여러번 사용될 가능성이 있기 때문에 component를 따로 분리해서 사용하는 것이 좋다.
-   localStorae는 항상 문자열로 저장해주어야 한다. (JSON.stringify 사용하기)

```js
useEffect(() => {
    localStorage.setItem('searchTags', JSON.stringify(searchTags));
}, [searchTags]);
```
