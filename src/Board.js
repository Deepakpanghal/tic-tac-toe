import React from 'react';
import calWinner from './Winner';
import Status from './Status';
import NextValue from './Next';


function Board() {
    const [squares, setSquares] = React.useState(Array(9).fill(null))
  
    const nextValue = NextValue(squares)
    const winner = calWinner(squares)
    const status = Status(winner, squares, nextValue)
  
    function selectSquare(square) {
      if (winner || squares[square]) {
        return
      }
      const squaresCopy = [...squares]
      squaresCopy[square] = nextValue
      setSquares(squaresCopy)
    }
  
    function restart() {
      setSquares(Array(9).fill(null))
    }
  
    function renderSquare(i) {
      return (
        <button className="square" onClick={() => selectSquare(i)}>
          {squares[i]}
        </button>
      )
    }
  
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button className="restart" onClick={restart}>
          Restart
        </button>
      </div>
    )
  }

  export default Board;