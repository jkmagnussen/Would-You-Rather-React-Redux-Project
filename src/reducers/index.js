import { combineReducers } from "redux";
import { authUser } from "./authUser";
import users from "./users";
import question from "./question.js";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authUser,
  users,
  question,
  loadingBar: loadingBarReducer,
});
