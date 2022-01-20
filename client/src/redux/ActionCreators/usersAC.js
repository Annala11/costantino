import { usersAT } from "../ActionTypes/usersAT";

export const userRegistrationAC = (payload) => {
  return {
    type: usersAT.REGISTRATION_AT,
    payload
  }
}

export const userInitAC = (payload) => {
  return {
    type: usersAT.INIT_USER,
    payload
  }
}

export const userErrorAC = (payload) => {
  return {
    type: usersAT.INIT_ERROR_USER,
    payload
  }
}

export const userLogoutAC = () => {
  return {
    type: usersAT.USER_LOGOUT,
  }
}
