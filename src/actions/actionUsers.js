import { RECIEVE_USERS, ANSWERED_QUESTION } from "./constants";

export function recieveUsers(users) {
  return {
    type: RECIEVE_USERS,
    users,
  };
}

export function answeredQuestion(questionIds, authUser) {
  return {
    type: ANSWERED_QUESTION,
    questionIds,
    authUser,
  };
}
