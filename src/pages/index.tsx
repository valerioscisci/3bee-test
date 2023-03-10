import { BoardBlock } from "@/components/BoardBlock/BoardBlock";
import { Gameboard } from "@/components/GameBoard/GameBoard";
import { GameOverModal } from "@/components/GameOverModal/GameOverModal";
import { useResetBoard } from "@/hooks/useResetBoard";
import { env } from "@/config/env";
import { useBoard } from "@/contexts/BoardContext";
import { Player } from "@/types";
import axios from "axios";
import { useCallback, useState } from "react";
import { useMutation } from "react-query";
import { ToastMessage } from "@/components/ToastMessage/ToastMessage";

export default function Home() {
  const resetGame = useResetBoard();

  const [gameOver, setGameOver] = useState({
    status: "",
    winner: "",
  });
  const [isError, setIsError] = useState(false);
  const {
    setCurrentPLayer,
    setIsLoading,
  } = useBoard();

  const getWinnerMutation = useMutation(
    (boardState: Array<string>) => {
      return axios.post(
        `${env.API_URL}/get-winner`,
        { boardState }
      );
    }
  );

  const handleChange = async (
    boardState: Array<string>,
    currentPlayer: Player
  ) => {
    setIsLoading(true);
    // fetch api to check if there is a winner
    try {
      const response = await getWinnerMutation.mutateAsync(
        boardState
      );
      // if winner open modal to show who is the winner
      setGameOver({
        status: "win",
        winner: response.data.winner,
      });
    } catch (e) {
      console.warn(
        "An error has occurred while updating the board. ",
        e
      );
      if (
        (e as any).response.data.error !==
        "Winner not found"
      ) {
        setIsError(true);
      } else {
        // check if there are other moves available
        if (
          !boardState.some(
            (val: string) => val === ""
          )
        ) {
          // if no winner and no move is available show modal
          setGameOver({
            status: "draw",
            winner: "",
          });
        } else {
          // if no winner but moves available keep going
          setCurrentPLayer(
            currentPlayer === "X" ? "O" : "X"
          );
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const hideGameOverModal = useCallback(() => {
    resetGame();
    setGameOver({ status: "", winner: "" });
  }, [resetGame]);

  return (
    <>
      <main
        className={
          "bg-gray-800 flex-1 min-h-screen"
        }
      >
        {isError && (
          <ToastMessage
            show={isError}
            message={
              "?????? An error has occurred while communicating with the server. Please retry."
            }
            hide={() => {
              setIsError(false);
            }}
          />
        )}
        <Gameboard onChange={handleChange}>
          {(i) => <BoardBlock index={i} />}
        </Gameboard>
        <GameOverModal
          showModal={!!gameOver.status}
          gameOver={gameOver}
          hideModal={hideGameOverModal}
        />
      </main>
    </>
  );
}
