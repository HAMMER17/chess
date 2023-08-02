import { getMoveBishop, getMoveKing, getMoveKnight, getMovePawn, getMoveQueen, getMoveRook, getPawnCaptures } from "./getMoves";

const arbiter = {
  getRegularMove: function ({ position, file, rank, piece }) {
    if (piece.endsWith('n'))
      return getMoveKnight({ position, file, rank })
    if (piece.endsWith('r'))
      return getMoveRook({ position, file, rank, piece })
    if (piece.endsWith('b'))
      return getMoveBishop({ position, file, rank, piece })
    if (piece.endsWith('q'))
      return getMoveQueen({ position, file, rank, piece })
    if (piece.endsWith('k'))
      return getMoveKing({ position, file, rank, piece })
    if (piece.endsWith('p'))
      return [
        ...getMovePawn({ position, file, rank, piece }),
        ...getPawnCaptures({ position, file, rank, piece })
      ]
  }

}
export default arbiter;