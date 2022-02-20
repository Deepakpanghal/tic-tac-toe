
function Status(winner, squares, nextValue) {
    return winner
      ? `Winner: ${winner}`
      : squares.every(Boolean)
      ? `MATCH DRAW`
      : `Next player: ${nextValue}`
  }
  export default Status;