interface BoardBlockProps {
  index: number;
}

export const BoardBlock: React.FC<BoardBlockProps> = ({
  i,
}) => {
  return (
    <div
      className={
        "bg-slate-600 flex flex-grow items-center justify-center first:mr-4 last:ml-4 aspect-square"
      }
    >
      x
    </div>
  );
};
