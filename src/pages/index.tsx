import { BoardBlock } from "@/components/BoardBlock/BoardBlock";
import { Gameboard } from "@/components/GameBoard/GameBoard";
import { env } from "@/config/env";
import { useBoard } from "@/contexts/BoardContext";
import { Player } from "@/types";
import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";

export default function Home() {
  const [isGameOver, setIsGameOver] = useState(
    false
  );
  const [isError, setIsError] = useState(false);
  const { setCurrentPLayer } = useBoard();

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
    // check if there are other moves available
    if (
      !boardState.some(
        (val: string) => val === ""
      )
    ) {
      setIsGameOver(true);
    }
    // fetch api to check if there is a winner
    try {
      await getWinnerMutation.mutateAsync(
        boardState
      );
      // if winner open modal to show who is the winner
      // if no winner but moves available keep going
      // if no winner and no move is available show modal
      setCurrentPLayer(
        currentPlayer === "X" ? "O" : "X"
      );
    } catch (e) {
      console.warn(
        "An error has occurred while updating the board. ",
        e
      );
      setIsError(true);
    }
  };

  return (
    <>
      <main
        className={
          "bg-gray-800 flex-1 min-h-screen"
        }
      >
        {/* TODO: disable board while fetching
        the backend and add a loader*/}
        <Gameboard onChange={handleChange}>
          {(i) => <BoardBlock index={i} />}
        </Gameboard>
      </main>
    </>
  );
}
