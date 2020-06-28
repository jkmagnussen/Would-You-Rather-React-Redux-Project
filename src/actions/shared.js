import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "../utils/_DATA";

import {
  recieveQuestions,
  createQuestion,
  saveQuestionAnswer,
} from "../actions/actionQuestions";

import { showLoading, hideLoading } from "react-redux-loading";

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

export function handleGetInitialData({ users, questions }) {
  return (dispatch) => {
    return getInitialData().then((questions, users) => {
      dispatch(recieveQuestions());
      dispatch(_getUsers());
    });
  };
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());
    return _saveQuestion({
      question,
      author: authedUser,
    }).then((question) => {
      dispatch(createQuestion(question));
      dispatch(hideLoading());
    });
  };
}

export function handleSaveQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const info = {
      authedUser: authedUser,
      qid,
      answer: answer,
    };
    _saveQuestionAnswer(info).then(() => {
      dispatch(saveQuestionAnswer(authedUser, qid, answer));
    });
  };
}
