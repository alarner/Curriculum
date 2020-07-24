function isVerticalWinOpportunity(board, column, player) {
  let playerCount = 0;
  let emptySpaceCount = 0;
  for (let i = 0; i < 3; i++) {
    if (board[i][column] === player) {
      playerCount++;
    } else if (board[i][column] === "") {
      emptySpaceCount++;
    }
  }
  return playerCount >= 2 && emptySpaceCount >= 1;
}

function isHorizontalWinOpportunity(board, column, player) {
  let playerCount = 0;
  let emptySpaceCount = 0;
  for (let i = 0; i < 3; i++) {
    if (board[column][i] === player) {
      playerCount++;
    } else if (board[column][i] === "") {
      emptySpaceCount++;
    }
  }
  return playerCount >= 2 && emptySpaceCount >= 1;
}

module.exports = {
  foo: "bar",
  isVerticalWinOpportunity: isVerticalWinOpportunity,
  isHorizontalWinOpportunity: isHorizontalWinOpportunity,
};
