import mv1 from "../../public/avi/avi_1.mp4";
import mv2 from "../../public/avi/avi_2.mp4";
import mv3 from "../../publ3ic/avi/avi_3.mp4";

const playList = [
  {
    id: 1,
    artist: "Camila Cabello",
    title: "This Love",
    avi: mv1,
  },
  {
    id: 2,
    artist: "Camila Cabello",
    title: "Never be the same",
    avi: mv2,
  },
  {
    id: 3,
    artist: "han yohan",
    title: "it's me",
    avi: mv3,
  },
];

const initialState = {
  playList,
  currentMusicId: playList[0].id,
  currentIndex: 0,
  playing: false,
};

const PLAY_MUSIC = "musicPlayer/PLAY_MUSIC";
const STOP_MUSIC = "musicPlayer/STOP_MUSIC";
const NEXT_MUSIC = "musicPlayer/NEXT_MUSIC";
const PREV_MUSIC = "musicPlayer/PREV_MUSIC";
const SET_CURRENT_INDEX = "musicPlayer/SET_CURRENT_INDEX";

export const playMusic = () => ({ type: PLAY_MUSIC });
export const stopMusic = () => ({ type: STOP_MUSIC });
export const nextMusic = () => ({ type: NEXT_MUSIC });
export const prevMusic = () => ({ type: PREV_MUSIC });
export const setCurrentIndex = (index) => ({ type: SET_CURRENT_INDEX, index });

const getRandomNum = (arr, excludeNum) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber] === excludeNum
    ? getRandomNum(arr, excludeNum)
    : arr[randomNumber];
};

export default function mvPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case PLAY_MUSIC:
      return {
        ...state,
        playing: true,
      };
    case STOP_MUSIC:
      return {
        ...state,
        playing: false,
      };
    case SET_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.index,
        currentMusicId: state.playList[action.index].id,
      };
    case NEXT_MUSIC:
      const nextIndex =
        state.repeat === "SHUFFLE"
          ? getRandomNum(
              Array.from(Array(playList.length).keys()),
              state.currentIndex
            )
          : (state.currentIndex + 1) % state.playList.length;
      return {
        ...state,
        currentIndex: nextIndex,
        currentMusicId: state.playList[nextIndex].id,
      };
    case PREV_MUSIC:
      const prevIndex =
        state.repeat === "SHUFFLE"
          ? getRandomNum(
              Array.from(Array(playList.length).keys()),
              state.currentIndex
            )
          : (state.currentIndex - 1 + state.playList.length) %
            state.playList.length;
      return {
        ...state,
        currentIndex: prevIndex,
        currentMusicId: state.playList[prevIndex].id,
      };

    default:
      return state;
  }
}
