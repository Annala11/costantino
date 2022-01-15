import { usersAT } from "../ActionTypes/usersAT";

export const userRegistrationAC = (payload) => {
  return {
    type: usersAT.REGISTRATION_AT,
    payload
  }
}
