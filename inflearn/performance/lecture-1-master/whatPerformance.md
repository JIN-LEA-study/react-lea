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

  - **리소스의 관점**에서 가이드 (로딩 성능 최적화)
  - 이미지를 가져올 때는 너비 기준 2배정도 큰 이미지를 사용하는게 좋다. (ex. 120 x 120px -> 240 x 240px)
  - API를 가져와서 불러오는 경우? Image CDN(컨텐츠 서버)으로 처리한다.
  - **imgIX** (imgix.com) 이용하면 CDN을 이용하지 않아도 사용 가능하다.
  - **getParametersForUnsplash** : 이미지를 프로세싱 할 수 있는 파라미터를 이용해 함수를 만들어 활용한다.

  ```js
  function getParametersForUnsplash({ width, height, quality, format }) {
    return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`;
  }
  ```

  - #### Image processing CDN

    - 원본 이미지를 특정 형태로 가공 (사이즈 변경, 이미지 포맷 변경 등) 후 보내줌

    ```
    http://cdn.image.com?src=[img src]&width=200&height=100
    ```

- #### DIAGNOSTICS
  - **페이지의 실행 관점**에서 가이드 (렌더링 성능 최적화)
