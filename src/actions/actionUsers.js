import { RECIEVE_USERS, ANSWERED_QUESTION } from "./constants";

export function recieveUsers(users) {
  return {
    type: RECIEVE_USERS,
    users,
  };
}

export function saveUserAnswer(authUser, qid, answer) {
  return {
    type: ANSWERED_QUESTION,
    auth: authUser,
    qid,
    option: answer,
  };
}
