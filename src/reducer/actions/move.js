import actions from "./type"

export const makeNewMove = ({ newPosition }) => {
  return { type: actions.NEW_MOVE, payload: { newPosition } }
}

export const generateCandidateMove = ({ candidateMove }) => {
  return { type: actions.GENERATE_MOVE, payload: { candidateMove } }
}

export const clearCandidateMove = () => {
  return { type: actions.CLEAR_MOVE }
}