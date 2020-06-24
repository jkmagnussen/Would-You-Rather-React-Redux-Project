import { SET_AUTH_USER, UNSET_AUTH_USER } from "./constants";

function setAuthUser(id) {
  return {
    type: SET_AUTH_USER,
    id,
  };
}

function unsetAuthUser(id) {
  return {
    type: UNSET_AUTH_USER,
    id,
  };
}
function createQuestion(id, question) {
  return {
    type: CREATE_QUESTION,
    id,
    question,
  };
}
