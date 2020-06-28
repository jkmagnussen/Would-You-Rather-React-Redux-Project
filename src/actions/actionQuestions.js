import {
  CREATE_QUESTION,
  REMOVE_QUESTION,
  RECIEVE_QUESTION,
  TOGGLE_VOTE,
} from "./constants";

// adding and removing a question action creators

export function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question,
  };
}

export function removeQuestion(qid, question) {
  return {
    type: REMOVE_QUESTION,
    qid,
    question,
  };
}

export function recieveQuestions(question, qid) {
  return {
    type: RECIEVE_QUESTION,
    qid,
    question,
  };
}

export function saveQuestionAnswer({ qid, authedUser, hasVoted }) {
  return {
    type: TOGGLE_VOTE,
    qid,
    authedUser,
    hasVoted,
  };
}
