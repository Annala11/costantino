import { usersAT } from "../ActionTypes/usersAT";

export const userRegistrationAC = (payload) => {
  return {
    type: usersAT.REGISTRATION_AT,
    payload
  }
}

export const userLoginAC = (payload) => {
  return {
    type: usersAT.INIT_USER,
    payload
  }
}
