interface GameOverModalProps {
  showModal: boolean;
  gameOver: { status: string; winner: string };
  hideModal: () => void;
}
export const GameOverModal: React.FC<GameOverModalProps> = ({
  showModal,
  gameOver,
  hideModal,
}) => {
  return showModal ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3
                className="text-3xl font-semibold"
                data-cy={"winner-player"}
              >
                {gameOver.status === "draw"
                  ? "It's a draw 🙃"
                  : `Player ${gameOver.winner}, you are the winner!  🎉`}
              </h3>
            </div>
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                Come on, play once more!
              </p>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 hover:text-slate-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={hideModal}
              >
                Play again 🎮
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null;
};
