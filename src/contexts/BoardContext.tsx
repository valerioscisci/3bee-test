import { createContext, useContext } from "react";

type boardContext = {
  player: "X" | "O";
  board: Array<Array<string>>;
};

const boardContextDefaultValues: boardContext = {
  player: "X",
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

const BoardContext = createContext<boardContext>(
  boardContextDefaultValues
);

export function useBoard() {
  return useContext(BoardContext);
}

type Props = {
  children: React.ReactNode;
};

export function BoardContextProvider({
  children,
}: Props) {
  const value = boardContextDefaultValues;

  return (
    <>
      <BoardContext.Provider value={value}>
        {children}
      </BoardContext.Provider>
    </>
  );
}
