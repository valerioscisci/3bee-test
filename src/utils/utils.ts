export const checkBoardWinner = (
  boardState: Array<string>
) => {
  let winner;

  switch (true) {
    // 0-1-2, 0-4-8, 0-3-6
    case ((boardState[0] === boardState[1] &&
      boardState[0] === boardState[2]) ||
      (boardState[0] === boardState[4] &&
        boardState[0] === boardState[8]) ||
      (boardState[0] === boardState[3] &&
        boardState[0] === boardState[6])) &&
      boardState[0] !== "":
      winner = boardState[0];
      break;
    // 3-4-5, 1-4-7, 2-4-6
    case ((boardState[4] === boardState[3] &&
      boardState[4] === boardState[5]) ||
      (boardState[4] === boardState[1] &&
        boardState[4] === boardState[7]) ||
      (boardState[4] === boardState[2] &&
        boardState[4] === boardState[6])) &&
      boardState[4] !== "":
      winner = boardState[4];
      break;
    // 2-5-8, 6-7-8
    case ((boardState[8] === boardState[5] &&
      boardState[8] === boardState[2]) ||
      (boardState[8] === boardState[6] &&
        boardState[8] === boardState[7])) &&
      boardState[8] !== "":
      winner = boardState[8];
      break;
    default:
      winner = "NO_WINNER";
      break;
  }

  return winner ? winner : "NO_WINNER";
};
