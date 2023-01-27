import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get board state and currentPlayer
  // If no winner return 404
  // IF winner return 200 body {winner: "X"}

  res.status(200).json({ name: "John Doe" });
}
