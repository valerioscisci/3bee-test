import { BoardBlock } from "@/components/BoardBlock/BoardBlock";
import { Gameboard } from "@/components/GameBoard/GameBoard";
import { useBoard } from "@/contexts/BoardContext";
import { useState } from "react";

export default function Home() {
  const [isGameOver, setIsGameOver] = useState(
    false
  );
  const { setCurrentPLayer } = useBoard();

  const handleChange = (
    boardState,
    currentPlayer
  ) => {
    console.log(boardState);
    // check if there are other moves available
    if (
      !boardState.some(
        (val: string) => val === ""
      )
    ) {
      setIsGameOver(true);
    }
    // fetch api to check if there is a winner
    // if winner open modal to show who is the winner
    // if no winner but moves available keep going
    // if no winner and no move is available show modal
    setCurrentPLayer(
      currentPlayer === "X" ? "O" : "X"
    );
  };

  return (
    <>
      <main
        className={
          "bg-gray-800 flex-1 min-h-screen"
        }
      >
        <Gameboard onChange={handleChange}>
          {(i) => <BoardBlock index={i} />}
        </Gameboard>
      </main>
    </>
  );
}
