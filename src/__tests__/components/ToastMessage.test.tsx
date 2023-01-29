import React from "react";
import {
  render,
  fireEvent,
} from "@testing-library/react";
import { ToastMessage } from "@/components/ToastMessage/ToastMessage";
import "@testing-library/jest-dom";

describe("<ToastMessage />", () => {
  let hideMock: jest.Mock;
  beforeEach(() => {
    hideMock = jest.fn();
  });

  it("should show the message when show prop is true", () => {
    const message = "Test message";
    const { getByText } = render(
      <ToastMessage
        show={true}
        message={message}
        hide={hideMock}
      />
    );
    const messageNode = getByText(message);
    expect(messageNode).toBeInTheDocument();
  });

  it("should not show the message when show prop is false", () => {
    const message = "Test message";
    const { queryByText } = render(
      <ToastMessage
        show={false}
        message={message}
        hide={hideMock}
      />
    );
    const messageNode = queryByText(message);
    expect(messageNode).toBeNull();
  });

  it("should call the hide function when the close button is clicked", () => {
    const message = "Test message";
    const { getByLabelText } = render(
      <ToastMessage
        show={true}
        message={message}
        hide={hideMock}
      />
    );
    const closeButton = getByLabelText("Close");
    fireEvent.click(closeButton);
    expect(hideMock).toHaveBeenCalled();
  });
});
