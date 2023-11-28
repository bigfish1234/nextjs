import { NextApiResponse, NextApiRequest } from "next";
import db from "../../server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    intro,
    requireability,
    totalmonth,
    jobName,
    salary,
    type,
    welfare,
    category,
    location,
    createtime,
  } = req?.body;

  try {
    await new Promise((resolved, reject) => {
      // 插入数据
      db.query(
        {
          sql: "INSERT INTO JOB_LIST (`type`,`jobName`,`salary`,`category`,`location`,`intro`,`requireability`,`welfare`,`totalmonth`,createtime) VALUES (?,?,?,?,?,?,?,?,?,?);",
          values: [
            type,
            jobName,
            salary,
            category,
            location,
            intro,
            requireability,
            welfare,
            totalmonth,
            createtime,
          ],
        },
        (err: any, result: any) => {
          if (err) {
            reject(err);
          } else {
            resolved(result);
          }
        }
      );
    });

    res.statusCode = 200;
    res.json({
      code: 200,
      data: null,
      success: true,
      message: "提交成功",
    });
  } catch (error) {
    console.log("🚀 ~ file: postJob.ts:57 ~ error:", error);
    res.statusCode = 500;
    res.json({
      code: 500,
      data: null,
      message: "提交失败!",
      success: false,
    });
  }
}
