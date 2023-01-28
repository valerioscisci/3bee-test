import { Player } from "@/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type boardContext = {
  player: Player;
  board: Array<string>;
  setCurrentPLayer: Dispatch<
    SetStateAction<Player>
  >;
  setBoardState: Dispatch<
    SetStateAction<string[]>
  >;
};

const boardContextDefaultValues: boardContext = {
  player: "X",
  board: Array(9).fill(""),
  setCurrentPLayer: () => {},
  setBoardState: () => {},
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
  const [boardState, setBoardState] = useState(
    boardContextDefaultValues.board
  );
  const [player, setCurrentPLayer] = useState(
    boardContextDefaultValues.player
  );

  const value = {
    board: boardState,
    setBoardState,
    player,
    setCurrentPLayer,
  };

  return (
    <BoardContext.Provider value={value}>
      {children}
    </BoardContext.Provider>
  );
}
