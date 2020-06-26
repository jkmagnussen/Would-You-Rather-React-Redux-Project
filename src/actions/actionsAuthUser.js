import { SET_AUTH_USER, UNSET_AUTH_USER } from "./constants";

//Authorised user action creators

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
