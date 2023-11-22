import { NextApiResponse, NextApiRequest } from "next";
import db from "../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = req.body;
    const jobdetail: any[] = await new Promise((resolve, reject) => {
      const sql = `SELECT * FROM spzn.JOB_LIST WHERE jobid = ${body.id};`;
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
      data: jobdetail[0],
      success: true,
      message: "",
    });
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
