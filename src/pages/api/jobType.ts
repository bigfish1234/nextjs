import { NextApiResponse, NextApiRequest } from "next";
import db from "../../server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const typelist = await new Promise((resolve, reject) => {
      const sql = `SELECT * FROM JOB_TYPE`;
      db.query(sql, (err: any, results: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });

    res.statusCode = 200;
    res.json({
      code: 200,
      data: typelist,
      success: true,
      message: "",
    });
  } catch (err) {
    res.statusCode = 500;
    res.json({
      code: 500,
      data: null,
      message: "类型获取失败!",
      success: false,
    });
  }
}
