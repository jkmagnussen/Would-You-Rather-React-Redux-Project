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
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          answers:
            action.hasVoted === true
              ? state[action.id].answers.filter(
                  (uid) => uid !== action.authedUser
                )
              : state[action.id].answers.concat([action.authedUser]),
        },
      };
    case CREATE_QUESTION:
      const { question } = action;
      return {
        ...state,
        [action.qid]: action.question,
      };
    default:
      return state;
  }
}
