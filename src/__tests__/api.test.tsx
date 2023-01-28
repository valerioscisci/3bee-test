import handler from "@/pages/api/get-winner";
import "@testing-library/jest-dom";

describe("handler", () => {
  it("should return status code 404 and error message 'Winner not found' if no winner is found", async () => {
    const req = {
      method: "POST",
      body: {
        boardState: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };

    handler(req as any, res as any);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({
      error: "Winner not found",
    });
  });

  it("should return status code 200 and winner 'X' if the winner is 'X'", async () => {
    const req = {
      method: "POST",
      body: {
        boardState: [
          "X",
          "X",
          "X",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    handler(req as any, res as any);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      winner: "X",
    });
  });
});
