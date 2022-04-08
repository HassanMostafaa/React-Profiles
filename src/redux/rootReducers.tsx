import { combineReducers } from "redux";
import currentUserReducer from "./currentUser/currentUserReducer";

export const rootReducers = combineReducers({
  currentUserReducer,
});
