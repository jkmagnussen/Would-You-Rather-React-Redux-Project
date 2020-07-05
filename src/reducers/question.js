import {
  RECIEVE_QUESTION,
  TOGGLE_VOTE,
  CREATE_QUESTION,
} from "../actions/constants";

export default function question(state = {}, action) {
  switch (action.type) {
    case RECIEVE_QUESTION:
      return {
        ...state,
        ...action.question,
      };
    case TOGGLE_VOTE:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    case CREATE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
