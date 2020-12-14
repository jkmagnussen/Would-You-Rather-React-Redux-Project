import { RECIEVE_USERS, ANSWERED_QUESTION, CREATE_USER } from "../actions/constants";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECIEVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case CREATE_USER: 
      return {
        ...state, 
        [action.users.id]: action.users,
      }
    case ANSWERED_QUESTION:
      return {
        ...state,
        [action.auth]: {
          ...state[action.auth],
          answers: {
            ...state[action.auth].answers,
            [action.qid]: action.option,
          },
        },
      };
    default:
      return state;
  }
}
