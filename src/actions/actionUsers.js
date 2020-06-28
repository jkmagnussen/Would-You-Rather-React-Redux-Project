import { RECIEVE_USERS } from "./constants";

export function recieveUsers(users) {
  return {
    type: RECIEVE_USERS,
    users,
  };
}
