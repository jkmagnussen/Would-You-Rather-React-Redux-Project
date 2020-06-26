import { _getUsers, _getQuestions, _saveQuestionAnswer } from "../utils/_DATA";

import { recieveQuestions } from "../actions/actionQuestions";

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    _saveQuestionAnswer(authedUser, qid, answer).then(() => {});
  };
}

function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function handleGetInitialData() {
  return (dispatch, getState) => {
    return getInitialData().then(() => {
      dispatch(recieveQuestions());
    });
  };
}
