import { RECIEVE_USERS } from "../actions/constants";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECIEVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}
