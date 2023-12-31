import React from 'react'
import { useAppContext } from '../context/Context'
import arbiter from '../arbiter/arbiter'
import { generateCandidateMove } from '../reducer/actions/move'

const Piece = ({ piece, rank, file }) => {
  const { appState, dispatch } = useAppContext()
  const { turn, position } = appState
  const currentPosition = position[position.length - 1]
  const prevPosition = position[position.length - 2]

  const onDragStart = (e) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', `${piece},${rank},${file}`)
    setTimeout(() => {
      e.target.style.display = 'none'
    }, 100)
    if (turn === piece[0]) {
      const candidateMove = arbiter.getMoveValid({ position: currentPosition, piece, rank, file, prevPosition })
      dispatch(generateCandidateMove({ candidateMove }))

    }
  }

  const onDragEnd = e => {
    e.target.style.display = 'block'
  }
  return (
    <div draggable={true} onDragEnd={onDragEnd} onDragStart={onDragStart}
      key={rank + '-' + file} className={`piece ${piece} p-${file}${rank}`}>

    </div>
  )
}

export default Piece
