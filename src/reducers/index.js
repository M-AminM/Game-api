import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import gameReducer from "./gameReducer";

const allReducers = combineReducers({
  game: gameReducer,
  detail: detailReducer,
});
export default allReducers;
