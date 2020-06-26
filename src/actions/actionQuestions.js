import {
  CREATE_QUESTION,
  REMOVE_QUESTION,
  RECIEVE_QUESTION,
} from "./constants";

// adding and removing a question action creators

function createQuestion(id, question) {
  return {
    type: CREATE_QUESTION,
    id,
    question,
  };
}

function removeQuestion(id, question) {
  return {
    type: REMOVE_QUESTION,
    id,
    question,
  };
}

function recieveQuestions(questions) {
  return {
    type: RECIEVE_QUESTION,
    id,
    question,
  };
}
