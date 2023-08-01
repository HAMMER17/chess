import React from 'react'
import '../style/board.css'
import Pieces from './Pieces'
import { useAppContext } from '../context/Context'

const Board = () => {
  const ranks = Array(8).fill().map((x, i) => 8 - i)
  const files = Array(8).fill().map((x, i) => i + 1)
  const file = Array(8).fill().map((x, i) => String.fromCharCode(i + 97))

  const { appState } = useAppContext()

  const position = appState.position[appState.position.length - 1]

  const getClassName = (i, j) => {
    let col = 'tile'
    col += (i + j) % 2 === 0 ? ' tile-dark ' : ' tile-light '
    if (appState.candidateMove?.find(m => m[0] === i && m[1] === j)) {
      if (position[i][j]) {
        col += ' attacking'
      } else {
        col += ' highlight'
      }
    }
    return col
  }

  const Rank = ({ ranks }) => {
    return (
      <div className="rank">
        {ranks.map((el) => <span key={Math.random()}>{el}</span>)}
      </div>
    )
  }
  const Files = ({ files }) => {
    return (
      <div className="file">
        {files.map((el) => <span key={Math.random()}>{el}</span>)}
      </div>
    )
  }
  return (
    <div className='board'>
      <Rank ranks={ranks} />

      <div className="files">
        {ranks.map((rank, i) => (
          files.map((file, j) => (
            <div key={rank + '-' + file}
              i={i} j={j} className={getClassName(7 - i, j)}></div>
          ))
        ))}
      </div>
      <Pieces />
      <Files files={file} />
    </div>
  )
}

export default Board
