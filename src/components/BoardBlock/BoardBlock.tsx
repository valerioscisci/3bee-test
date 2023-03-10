import { useBoard } from "@/contexts/BoardContext";

interface BoardBlockProps {
  index: number;
}

export const BoardBlock: React.FC<BoardBlockProps> = ({
  index,
}) => {
  const { board } = useBoard();
  const currentValue = board[index];

  return (
    <div
      className={"absolute text-white text-3xl"}
    >
      {currentValue}
    </div>
  );
};
