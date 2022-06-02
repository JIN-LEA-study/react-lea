// root reducer 역할을 해줘야 함

import { combineReducers } from "redux";
import score from "./modules/score";

export default combineReducers({
  //서브리듀서
  score,
});
