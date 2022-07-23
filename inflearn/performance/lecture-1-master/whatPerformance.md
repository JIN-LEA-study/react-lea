### 프론트엔트 개발자를 위한, 실전 웹 성능 최적화 part1

- 웹 성능 최적화는 로딩 성능, 렌더링 성능 두가지로 나뉜다.

#### 로딩 성능 최적화

- 이미지 사이즈 최적화 : 어떤 이미지 사이즈가 적절한가?
- code split : 코드를 효율적으로 분할
- 텍스트 압축 : 리소스들을 다운 받기 전 압축해서 다운 받는데 다운로드 데이터 양 줄이기

#### 렌더링 성능 최적화

- bottleneck 코드 최적화 : 병목 현상을 일으키는 코드를 찾아내고, 최적화 시킬 것인지?

### tool

- Chrome Network tap
- Chrome performance tap
- Chrome Audit tap (Light house) : 어느정도 성능인지 파악 가능
- webpack-bundle-analyzer

### Lighthouse

- #### OPPORTUNITIES

  - 리소스의 관점에서 가이드 (로딩 성능 최적화)

- #### DIAGNOSTICS
  - 페이지의 실행 관점에서 가이드 (렌더링 성능 최적화)
