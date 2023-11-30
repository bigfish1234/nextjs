import { NextApiResponse, NextApiRequest } from "next";
import db from "../../server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { userName, password } = req.body;
    console.log(
      "🚀 ~ file: login.ts:10 ~ userName, password:",
      userName,
      password
    );
    if (userName == "admin" && password == "123456") {
      res.statusCode = 200;
      res.json({ name: "yyy", id: "1" });
    } else {
      res.statusCode = 200;
      res.json({
        code: 200,
        data: null,
        message: "",
        success: false,
      });
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
