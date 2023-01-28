import {
  render,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { GameOverModal } from "@/components/GameOverModal/GameOverModal";

describe("<GameOverModal />", () => {
  it("renders correctly when showModal is true and gameOver status is draw", () => {
    const hideModal = jest.fn();
    const { getByText } = render(
      <GameOverModal
        showModal={true}
        gameOver={{ status: "draw", winner: "" }}
        hideModal={hideModal}
      />
    );
    expect(
      getByText("It's a draw 🙃")
    ).toBeInTheDocument();
    expect(
      getByText("Play again 🎮")
    ).toBeInTheDocument();
  });

  it("renders correctly when showModal is true and gameOver status is winner", () => {
    const hideModal = jest.fn();
    const { getByText } = render(
      <GameOverModal
        showModal={true}
        gameOver={{
          status: "winner",
          winner: "X",
        }}
        hideModal={hideModal}
      />
    );
    expect(
      getByText(
        "Player X, you are the winner! 🎉"
      )
    ).toBeInTheDocument();
    expect(
      getByText("Play again 🎮")
    ).toBeInTheDocument();
  });

  it("calls hideModal when play again button is clicked", () => {
    const hideModal = jest.fn();
    const { getByText } = render(
      <GameOverModal
        showModal={true}
        gameOver={{ status: "draw", winner: "" }}
        hideModal={hideModal}
      />
    );
    const playAgainBtn = getByText(
      "Play again 🎮"
    );
    fireEvent.click(playAgainBtn);
    expect(hideModal).toHaveBeenCalled();
  });
});
