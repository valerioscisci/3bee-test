import {
  render,
  fireEvent,
  renderHook,
  act,
} from "@testing-library/react";
import { useBoard } from "@/contexts/BoardContext";
import { Gameboard } from "@/components/GameBoard/GameBoard";
import "@testing-library/jest-dom";
import { useState } from "react";

jest.mock("@/contexts/BoardContext", () => ({
  useBoard: jest.fn(),
}));

describe("<GameBoard />", () => {
  beforeEach(() => {
    const { result } = renderHook(() =>
      useState(false)
    );
    const [state, setState] = result.current;
    (useBoard as jest.Mock).mockImplementation(
      () => ({
        player: "X",
        board: Array(9).fill(""),
        isLoading: false,
        setBoardState: state,
        setCurrentPLayer: jest.fn(),
        setIsLoading: setState,
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

  it("should not render the loading spinner", () => {
    const onChange = jest.fn();
    const { result } = renderHook(() =>
      useBoard()
    );
    const { queryByTestId } = render(
      <Gameboard onChange={onChange}>
        {(_) => <></>}
      </Gameboard>
    );
    expect(result.current.isLoading).toBeFalsy();
    expect(queryByTestId("loader")).toBeNull();
  });
});
