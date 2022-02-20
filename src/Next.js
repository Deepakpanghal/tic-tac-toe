function NextValue(squares) {
    return (
    squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
    )
  }
  
  export default NextValue;