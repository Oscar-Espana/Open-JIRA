import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  secret?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(process.env);
  res.status(200).json({ name: "Example", secret: process.env.SECRET });
}
