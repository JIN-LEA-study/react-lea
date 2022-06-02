// 퀴즈를 풀고 정답인 경우 -> 점수 획득
// 오답인 경우 -> 점수 획득 X

// 상태 : 사용자의 현재 점수 (score)
// 액션 : 정답인지? 아닌지? 판별 -> 정답이면 점수 ++;

// 서브 리듀서, 액션 타입(문자열)

const CHECK_CORRECT = "score/CHECK_CORRECT";
const NEXT_PAGE = "score/NEXT_PAGE";
const RESET = "score/RESET";

// 액션 생성 함수

export function check({ isCorrect }) {
  return {
    type: CHECK_CORRECT,
    payload: { isCorrect },
  };
}

export function next() {
  return {
    type: NEXT_PAGE,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

// 초기 상태

const initialState = {
  score: 0,
  page: 0, // 0: 인트로페이지, 1 ~ quizs.length: 퀴즈페이지, quizs.length+1 : 마지막 페이지
  quizs: [
    {
      q: "대한민국의 수도는?",
      img: "https://images.unsplash.com/photo-1595185515922-9b79af1ef52d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80",
      a: [
        {
          text: "서울",
          isCorrect: true,
        },
        {
          text: "인천",
          isCorrect: false,
        },
        {
          text: "부산",
          isCorrect: false,
        },
      ],
    },
    {
      q: "미국의 수도는?",
      img: "https://images.unsplash.com/photo-1569328922596-4c04460c91a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
      a: [
        {
          text: "샌프란시스코",
          isCorrect: false,
        },
        {
          text: "워싱턴 D.C",
          isCorrect: true,
        },
        {
          text: "뉴욕",
          isCorrect: false,
        },
      ],
    },
    {
      q: "일본의 수도는?",
      img: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2300&q=80",
      a: [
        {
          text: "도쿄",
          isCorrect: true,
        },
        {
          text: "오사카",
          isCorrect: false,
        },
        {
          text: "오키나와",
          isCorrect: false,
        },
      ],
    },
    {
      q: "베트남의 수도는?",
      img: "https://images.unsplash.com/photo-1555921015-5532091f6026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      a: [
        {
          text: "호이안",
          isCorrect: true,
        },
        {
          text: "다낭",
          isCorrect: false,
        },
        {
          text: "하노이",
          isCorrect: false,
        },
      ],
    },
    {
      q: "태국의 수도는?",
      img: "https://images.unsplash.com/photo-1510379872535-9310dc6fd6a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      a: [
        {
          text: "파타야",
          isCorrect: false,
        },
        {
          text: "방콕",
          isCorrect: true,
        },
        {
          text: "코사무이",
          isCorrect: false,
        },
      ],
    },
    {
      q: "프랑스의 수도는?",
      img: "https://images.unsplash.com/photo-1583265266785-aab9e443ee68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      a: [
        {
          text: "파리",
          isCorrect: true,
        },
        {
          text: "마르세유",
          isCorrect: false,
        },
        {
          text: "낭트",
          isCorrect: false,
        },
      ],
    },
    {
      q: "포르투갈의 수도는?",
      img: "https://images.unsplash.com/photo-1501927023255-9063be98970c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      a: [
        {
          text: "신트라",
          isCorrect: false,
        },
        {
          text: "포르투",
          isCorrect: false,
        },
        {
          text: "리스본",
          isCorrect: true,
        },
      ],
    },
    {
      q: "이탈리아의 수도는?",
      img: "https://images.unsplash.com/photo-1604579803699-127581deabdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      a: [
        {
          text: "베네치아",
          isCorrect: false,
        },
        {
          text: "나폴리",
          isCorrect: false,
        },
        {
          text: "로마",
          isCorrect: true,
        },
      ],
    },
    {
      q: "그리스의 수도는?",
      img: "https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      a: [
        {
          text: "아테네",
          isCorrect: true,
        },
        {
          text: "산토리니",
          isCorrect: false,
        },
        {
          text: "크레타",
          isCorrect: false,
        },
      ],
    },
    {
      q: "캐나다의 수도는?",
      img: "https://images.unsplash.com/photo-1599457480385-83984b998663?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      a: [
        {
          text: "토론토",
          isCorrect: false,
        },
        {
          text: "오타와",
          isCorrect: true,
        },
        {
          text: "캘거리",
          isCorrect: false,
        },
      ],
    },
  ],
};

// 리듀서

export default function score(state = initialState, action) {
  switch (action.type) {
    case CHECK_CORRECT:
      return {
        ...state,
        score: action.payload.isCorrect ? state.score + 10 : state.score,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        score: 0,
        page: 0,
      };
    default:
      return state;
  }
}
