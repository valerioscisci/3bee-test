import { BOARD_STRUCTURE } from "@/const/constants";
import { useBoard } from "@/contexts/BoardContext";
import { Player } from "@/types";
import { useCallback } from "react";
import { ClipLoader } from "react-spinners";
import { useResetBoard } from "../../hooks/useResetBoard";

interface GameboardProps {
  onChange: (
    boardState: Array<string>,
    currentPlayer: Player
  ) => void;
  children: (i: number) => React.ReactNode;
}

// TODO: add i18n
export const Gameboard: React.FC<GameboardProps> = ({
  onChange,
  children,
}) => {
  const { player, board, isLoading } = useBoard();
  const resetGame = useResetBoard();

  const onBoardBlockClick = useCallback(
    (index: number) => {
      let newBoardState = board;
      newBoardState[index] = player;
      onChange(newBoardState, player);
    },
    [board, onChange, player]
  );

  return (
    <div
      className={
        "p-2 md:p-4 lg:p-6 max-w-screen-sm justify-center mx-auto"
      }
    >
      <div
        className={
          "flex flex-row justify-between font-semibold items-center md:text-lg"
        }
      >
        <h1
          className={
            "text-white md:text-lg lg:text-xl flex items-center gap-2"
          }
        >
          Current Player: {player}
          {isLoading && (
            <ClipLoader
              loading={isLoading}
              size={35}
              aria-label="Loading Spinner"
              data-testid="loader"
              color={"white"}
            />
          )}
        </h1>
        <button
          className={
            "bg-slate-500 py-3 px-8 rounded-xl hover:bg-slate-300 hover:shadow-md"
          }
          onClick={resetGame}
        >
          Reset
        </button>
      </div>
      <div className={"mt-4 aspect-square"}>
        {BOARD_STRUCTURE.map((row) => {
          return (
            <div
              key={row.toString()}
              className={
                "bg-slate-900 flex flex-row w-full p-1 md:p-2 px-2 md:px-4 first:pt-2 first:md:pt-4 first:rounded-t-md last:pb-2 last:md:pb-4 last:rounded-b-md"
              }
            >
              {row.map((boardBlock) => {
                return (
                  <div
                    key={boardBlock}
                    onClick={() => {
                      if (
                        board[boardBlock] ===
                          "" &&
                        !isLoading
                      ) {
                        onBoardBlockClick(
                          boardBlock
                        );
                      }
                    }}
                    className={`bg-slate-600 flex flex-grow items-center justify-center first:mr-2 first:md:mr-4 last:ml-2 last:md:ml-4 aspect-square ${
                      board[boardBlock] === "" &&
                      "cursor-pointer"
                    }`}
                  >
                    {children(boardBlock)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
