import { combineReducers } from "redux";
import currentUserReducer from "./currentUser/currentUserReducer";
import { adminReducers } from "./adminPrivileges/adminReducers";
export const rootReducers = combineReducers({
  currentUserReducer,
  adminReducers,
});
