import { RECIEVE_USERS } from "./constants";

function recieveUsers(users) {
  return {
    type: RECIEVE_USERS,
    users,
  };
}
