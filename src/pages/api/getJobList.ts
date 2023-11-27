import { NextApiResponse, NextApiRequest } from "next";
import db from "../../server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let sql = "";
    const { type = -1, pos = -1, keyword = "" } = req?.body;
    if (type !== -1 && pos !== -1) {
      sql =
        `SELECT * FROM JOB_LIST WHERE type = ${type} AND jobid = ${pos}` +
        (keyword ? ` AND jobName LIKE '%${keyword}%'` : "");
    } else if (type == -1 && pos !== -1) {
      sql =
        `SELECT * FROM JOB_LIST WHERE jobid = ${pos}` +
        (keyword ? ` AND jobName LIKE '%${keyword}%'` : "");
    } else if (type !== -1 && pos == -1) {
      sql =
        `SELECT * FROM JOB_LIST WHERE type = ${type}` +
        (keyword ? ` AND jobName LIKE '%${keyword}%'` : "");
    } else {
      sql =
        "SELECT * FROM JOB_LIST" +
        (keyword ? ` WHERE jobName LIKE '%${keyword}%'` : "");
    }

    const jobList: any = await new Promise((resolve, reject) => {
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
      data: jobList,
      message: "",
      success: true,
    });
  } catch (err) {
    res.statusCode = 500;
    res.json({
      code: 500,
      data: null,
      message: "Internal server error!",
      success: false,
    });
  }
}
