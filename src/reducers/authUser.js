import { SET_AUTH_USER, UNSET_AUTH_USER } from "../actions/constants";

function authUser(state, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.id;

    case UNSET_AUTH_USER:
      return null;
    default:
      return state;
  }
}
