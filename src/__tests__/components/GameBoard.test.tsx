import {
  render,
  fireEvent,
} from "@testing-library/react";
import { useBoard } from "@/contexts/BoardContext";
import { Gameboard } from "@/components/GameBoard/GameBoard";
import "@testing-library/jest-dom";

jest.mock("@/contexts/BoardContext", () => ({
  useBoard: jest.fn(),
}));

describe("<GameBoard />", () => {
  beforeEach(() => {
    (useBoard as jest.Mock).mockImplementation(
      () => ({
        player: "X",
        board: Array(9).fill(""),
        setBoardState: jest.fn(),
        setCurrentPLayer: jest.fn(),
      })
    );
  });

  it("should render the current player", () => {
    const { getByText } = render(
      <Gameboard onChange={() => {}}>
        {(_) => <></>}
      </Gameboard>
    );
    const currentPlayer = getByText(
      "Current Player: X"
    );
    expect(currentPlayer).toBeInTheDocument();
  });

  it("should call the onChange function when a block is clicked", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Gameboard onChange={onChange}>
        {(i) => (
          <div data-testid={`block-${i}`} />
        )}
      </Gameboard>
    );
    const block = getByTestId("block-0");
    fireEvent.click(block);
    expect(onChange).toBeCalledTimes(1);
  });
});
