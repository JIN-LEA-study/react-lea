## NETFLIX with React project

리액트를 이용하여 넷플릭스 사이트를 만들어보자

### Project

**pages** : MainPage, MoviePage, MovieDetailPage

- MainPage

  - 배너를 볼 수 있음
  - 3가지 섹션으로 나뉨(popular, top rated, upcomming)
  - 영화 카드에 마우스를 올려두면 제목, 장르, 청불여부, 점수, 인기도.. 정보를 알 수 있음
  - 영화 슬라이드로 넘기면서 볼 수 있음
  - 영화 검색
  - 영화 정렬 할 수 있음
  - 영화 필터링 할 수 있음

- MovieDetailPage
  - 포스터, 제목, 줄거리, 점수, 인기도, 청불여부, 예산, 이익, 러닝타임 등
  - Trailerf를 누르면 볼 수 있음
  - 영화 리뷰도 볼 수 있음
  - 관련된 영화도 볼 수 있음

### notice

[TMDB](https://www.themoviedb.org/) : 영화 API

### Install

- react-bootstrap@2.4.0 / bootstrap@5.1.3
- react-router-dom@6
- redux / react-redux@7.2.6
- redux-thunk
- redux-devtools-extension
