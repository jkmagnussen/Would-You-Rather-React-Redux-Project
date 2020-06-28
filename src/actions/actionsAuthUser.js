import { SET_AUTH_USER, UNSET_AUTH_USER } from "./constants";

//Authorised user action creators

export function setAuthUser(id) {
  return {
    type: SET_AUTH_USER,
    id,
  };
}

export function unsetAuthUser(id) {
  return {
    type: UNSET_AUTH_USER,
    id,
  };
}
