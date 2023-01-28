import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { BoardBlock } from "@/components/BoardBlock/BoardBlock";

jest.mock("react", () => {
  const original = jest.requireActual("react");
  return {
    ...original,
    useContext: jest.fn().mockReturnValue({
      board: [
        "",
        "",
        "X",
        "",
        "",
        "",
        "",
        "",
        "O",
      ],
    }),
  };
});

describe("<BoardBlock />", () => {
  test("renders the board block with the correct value(X in this case)", () => {
    render(<BoardBlock index={2} />);
    expect(
      screen.getByText("X")
    ).toBeInTheDocument();
  });

  test("renders the board block with the correct value(O in this case)", () => {
    render(<BoardBlock index={8} />);
    expect(
      screen.getByText("O")
    ).toBeInTheDocument();
  });
});
