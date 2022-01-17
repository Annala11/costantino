import { branchesAT } from "../ActionTypes/branchesAT";

export const branchesInitAC = (payload) => {
  return {
    type: branchesAT.INIT_BRANCHES,
    payload
  }
}
