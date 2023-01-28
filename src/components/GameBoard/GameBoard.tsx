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
    <div className={"p-4 md:p-6 lg:p-8"}>
      <div
        className={
          "flex flex-row justify-between font-semibold items-center "
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
      <div
        className={"mt-8 md:mt-16 aspect-square"}
      >
        {BOARD_STRUCTURE.map((row) => {
          return (
            <div
              key={row.toString()}
              className={
                "bg-slate-900 p-2 flex flex-row w-full px-4 first:pt-4 first:rounded-t-md last:pb-4 last:rounded-b-md"
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
