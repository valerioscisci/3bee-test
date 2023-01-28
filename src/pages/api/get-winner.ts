import { checkBoardWinner } from "@/utils/utils";
import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

interface ExtendedNextApiRequest
  extends NextApiRequest {
  body: {
    boardState: Array<string>;
  };
}

export default function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({
      message: "Only POST requests allowed",
    });
    return;
  }
  // Get board state and currentPlayer
  const { body } = req;

  const winner = checkBoardWinner(
    body.boardState
  );

  // If no winner return 404
  if (winner === "NO_WINNER") {
    res
      .status(404)
      .send({ error: "Winner not found" });
  } else {
    // IF winner return 200 body {winner: "X"}
    res.status(200).json({ winner: winner });
  }
}
