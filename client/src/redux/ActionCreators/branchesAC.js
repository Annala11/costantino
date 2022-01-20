import { branchesAT } from "../ActionTypes/branchesAT";

export const initBranchesAC = (payload) => {
  return {
    type: branchesAT.INIT_BRANCHES,
    payload
  }
}
