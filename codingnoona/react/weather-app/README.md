## CodingNoona React study

<b>part 3. 두번째 프로젝트: 날씨앱 만들기</b>

## todo list

- 현재위치 기반 날씨 가져오기
- UI만들기
- 날씨데이터 보여주기
- 버튼 보여주기
- 도시별 날씨 가져오기
- 로딩 스피너

<b>로직 순서</b>

1. 앱이 실행되자마자 현재위치기반 날씨가 보인다.
2. 날씨 정보에는 도시, 섭씨 화씨 날씨 상태
3. 5개의 버튼 만들기 (현재 위치 1개, 다른 도시 4개)
4. 도시 버튼을 누를 때마다 도시별 날씨가 나온다
5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다
6. 데이터를 들고오는 동안 로딩 스피너가 돈다

## study

- url을 넣을 땐 백틱으로 감싸준다
- 다이나믹 value는 ${}을 사용한다
- control + c : 서버종료
- null error 초기값이 null, useEffect UI render 후 값이 보여짐
- weather && weather.name === weather?.name : weather이 있으면 weather.name을 보여줘 (삼항연산자)

## note

- Geolocation API
  https://www.w3schools.com/html/html5_geolocation.asp
