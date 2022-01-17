import { servicesAT } from "../ActionTypes/servicesAT";

export const initServicesAC = (payload) => {
  return {
    type: servicesAT.INIT_SERVICES,
    payload
  }
}
