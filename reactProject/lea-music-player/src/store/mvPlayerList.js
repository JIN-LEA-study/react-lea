import mv1 from "../../src/avi/avi_1.mp4";
import mv2 from "../../src/avi/avi_2.mp4";
import mv3 from "../../src/avi/avi_3.mp4";
import mv4 from "../../src/avi/avi_4.mp4";
import mv5 from "../../src/avi/avi_5.mp4";

import img1 from "../image/han_0.jpg";
import img2 from "../image/han_1.jpg";
import img3 from "../image/han_2.jpg";
import img4 from "../image/han_3.jpg";
import img5 from "../image/han_4.jpg";

const playList = [
  {
    id: 1,
    artist: "한요한",
    name: "이게나야",
    avi: mv1,
    img: "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/262/891/82262891_1631582373979_1_600x600.JPG/dims/resize/Q_80,0",
    img2: img1,
  },
  {
    id: 2,
    artist: "한요한",
    name: "취소해",
    avi: mv2,
    img: "https://w.namu.la/s/42d37a86418507681bb22e0c2a7f85402e43cb0826b64518a4df7d14c549e462d5a9715e3bc5ae73a58c723b8fe3346084e4cab4bc3990b0c51d646719b45a80cb0629c851aba607572fe6253462356ed58e36647e4f81045a7d0b8309012f25ce8a38e6294b4bbbf2e5bd5c4ef564f0",
    img2: img2,
  },
  {
    id: 3,
    artist: "한요한",
    name: "걱정마 & 록시땅",
    avi: mv3,
    img: "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/900/014/80900014_1480412901845_1_600x600.JPG/dims/resize/Q_80,0",
    img2: img3,
  },
  {
    id: 4,
    artist: "한요한",
    name: "람보르기니",
    avi: mv4,
    img: "https://w.namu.la/s/42d37a86418507681bb22e0c2a7f85402e43cb0826b64518a4df7d14c549e462d5a9715e3bc5ae73a58c723b8fe3346084e4cab4bc3990b0c51d646719b45a80cb0629c851aba607572fe6253462356ed58e36647e4f81045a7d0b8309012f25ce8a38e6294b4bbbf2e5bd5c4ef564f0",
    img2: img4,
  },
  {
    id: 5,
    artist: "한요한",
    name: "400km",
    avi: mv5,
    img: "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/900/014/80900014_1480412901845_1_600x600.JPG/dims/resize/Q_80,0",
    img2: img5,
  },
];

const initialState = {
  playList,
  currentMVId: playList[0].id,
  currentIndex: 0,
  playing: true,
};

const repeatMode = ["SHUFFLE"];
const PLAY_MV = "mvPlayer/PLAY_MV";
const STOP_MV = "mvPlayer/STOP_MV";
const NEXT_MV = "mvPlayer/NEXT_MV";
const PREV_MV = "mvPlayer/PREV_MV";
const SET_REPEAT = "mvPlayer/SET_REPEAT";
const SET_CURRENT_INDEX = "mvPlayer/SET_CURRENT_INDEX";

export const playMV = () => ({ type: PLAY_MV });
export const stopMV = () => ({ type: STOP_MV });
export const nextMV = () => ({ type: NEXT_MV });
export const prevMV = () => ({ type: PREV_MV });
export const setRepeat = () => ({ type: SET_REPEAT });
export const setCurrentIndex = (index) => ({ type: SET_CURRENT_INDEX, index });

const getRandomNum = (arr, excludeNum) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber] === excludeNum
    ? getRandomNum(arr, excludeNum)
    : arr[randomNumber];
};

export default function mvPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case PLAY_MV:
      return {
        ...state,
        playing: true,
      };
    case STOP_MV:
      return {
        ...state,
        playing: false,
      };
    case SET_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.index,
        currentMVcId: state.playList[action.index].id,
      };
    case NEXT_MV:
      const nextIndex = state.repeat
        ? getRandomNum(
            Array.from(Array(playList.length).keys()),
            state.currentIndex
          )
        : (state.currentIndex + 1) % state.playList.length;
      return {
        ...state,
        currentIndex: nextIndex,
        currentMVId: state.playList[nextIndex].id,
      };
    case PREV_MV:
      const prevIndex = state.repeat
        ? getRandomNum(
            Array.from(Array(playList.length).keys()),
            state.currentIndex
          )
        : (state.currentIndex - 1 + state.playList.length) %
          state.playList.length;
      return {
        ...state,
        currentIndex: prevIndex,
        currentMVId: state.playList[prevIndex].id,
      };
    case SET_REPEAT:
      return {
        ...state,
        repeat:
          repeatMode[
            (repeatMode.indexOf(state.repeat) + 1) % repeatMode.length
          ],
      };

    default:
      return state;
  }
}
