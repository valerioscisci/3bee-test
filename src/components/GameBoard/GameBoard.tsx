import { BOARD_STRUCTURE } from "@/const/constants";

interface GameboardProps {
  onChange: (
    boardState: any,
    currentPlayer: any
  ) => void;
  children: (i: number) => React.ReactNode;
}

// TODO: add i18n
export const Gameboard: React.FC<GameboardProps> = ({
  onChange,
  children,
}) => {
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
            "text-white md:text-lg lg:text-xl"
          }
        >
          Current Player:
        </h1>
        <button
          className={
            "bg-slate-500 py-3 px-8 rounded-xl hover:bg-slate-300 hover:shadow-md"
          }
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
                return children(boardBlock);
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
