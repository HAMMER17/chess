import actions from "./actions/type"

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.NEW_MOVE: {
      let { turn, position } = state
      turn = turn === 'w' ? 'b' : 'w'
      position = [...position, action.payload.newPosition]
      return {
        ...state, turn, position
      }
    }
    case actions.GENERATE_MOVE: {
      const { candidateMove } = action.payload
      return {
        ...state, candidateMove
      }
    }
    case actions.CLEAR_MOVE: {
      return {
        ...state, candidateMove: []
      }
    }
    default: return state
  }

}

