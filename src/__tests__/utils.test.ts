import { checkBoardWinner } from "@/utils/utils";
import "@testing-library/jest-dom";

test("checkBoardWinner", () => {
  const boardState1 = [
    "X",
    "X",
    "X",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  expect(checkBoardWinner(boardState1)).toBe("X");

  const boardState2 = [
    "",
    "",
    "",
    "",
    "O",
    "O",
    "O",
    "",
    "",
  ];
  expect(checkBoardWinner(boardState2)).toBe(
    "NO_WINNER"
  );

  const boardState3 = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  expect(checkBoardWinner(boardState3)).toBe(
    "NO_WINNER"
  );

  const boardState4 = [
    "X",
    "O",
    "X",
    "O",
    "X",
    "O",
    "O",
    "X",
    "X",
  ];
  expect(checkBoardWinner(boardState4)).toBe("X");
});
