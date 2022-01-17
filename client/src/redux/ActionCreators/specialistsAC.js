import { specialistsAT } from "../ActionTypes/specialistsAT";

export const initSpecialistsAC = (payload) => {
  return {
    type: specialistsAT.INIT_SPECIALISTS,
    payload
  }
}
