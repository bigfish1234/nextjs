import { NextApiResponse, NextApiRequest } from "next";
import db from "../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const posList = await new Promise((resolve, reject) => {
      const sql = `SELECT jobid,jobName FROM spzn.JOB_LIST`;
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
      data: posList,
      success: true,
      message: "",
    });
  } catch (err) {
    res.statusCode = 500;
    res.json({
      code: 500,
      data: null,
      message: "职位获取失败!",
      success: false,
    });
  }
}
