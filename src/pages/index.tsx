import { BoardBlock } from "@/components/BoardBlock/BoardBlock";
import { Gameboard } from "@/components/GameBoard/GameBoard";
import { BoardContextProvider } from "@/contexts/BoardContext";

export default function Home() {
  const handleChange = (
    boardState,
    currentPlayer
  ) => {
    // check if there are other moves available
    // fetch api to check if there is a winner
    // if winner open modal to show who is the winner
    // if no winner but moves available keep going
    // if no winner and no move is available show modal
  };

  return (
    <BoardContextProvider>
      <main
        className={
          "bg-gray-800 flex-1 min-h-screen"
        }
      >
        <Gameboard onChange={handleChange}>
          {(i) => <BoardBlock index={i} />}
        </Gameboard>
      </main>
    </BoardContextProvider>
  );
}
