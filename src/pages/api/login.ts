import { NextApiResponse, NextApiRequest } from "next";
import db from "../../server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { userName, password } = req.body;
    if (userName == "admin" && password == "123456") {
      res.status(200).json({ name: "admin", id: "1" });
    } else {
      res.status(200).json(null);
    }
  } catch (err) {
    res.statusCode = 500;
    res.json({
      code: 500,
      data: null,
      message: "",
      success: false,
    });
  }
}
