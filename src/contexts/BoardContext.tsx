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
  isLoading: boolean;
  setCurrentPLayer: Dispatch<
    SetStateAction<Player>
  >;
  setBoardState: Dispatch<
    SetStateAction<string[]>
  >;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const boardContextDefaultValues: boardContext = {
  player: "X",
  board: Array(9).fill(""),
  isLoading: false,
  setCurrentPLayer: () => {},
  setBoardState: () => {},
  setIsLoading: () => {},
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
  const [isLoading, setIsLoading] = useState(
    boardContextDefaultValues.isLoading
  );

  const value = {
    board: boardState,
    setBoardState,
    player,
    setCurrentPLayer,
    isLoading,
    setIsLoading,
  };

  return (
    <BoardContext.Provider value={value}>
      {children}
    </BoardContext.Provider>
  );
}
