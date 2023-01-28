import { useBoard } from "@/contexts/BoardContext";
import { useCallback } from "react";

export const useResetBoard = () => {
  const {
    setBoardState,
    setCurrentPLayer,
  } = useBoard();

  const resetGame = useCallback(() => {
    setCurrentPLayer("X");
    setBoardState(Array(9).fill(""));
  }, [setBoardState, setCurrentPLayer]);

  return resetGame;
};
