import { NextApiResponse, NextApiRequest } from "next";
import db from "../../server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      intro,
      requireability,
      totalmonth,
      jobName,
      salary,
      type,
      welfare,
      category,
      createtime,
      id,
    } = req?.body;
    await new Promise((resolve, reject) => {
      const sql = `UPDATE JOB_LIST SET type=${type},jobName='${jobName}',salary='${salary}',category='${category}',intro='${intro}',requireability='${requireability}',welfare='${welfare}',totalmonth=${totalmonth},createtime='${createtime}' where jobid = ${id};`;
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
      data: null,
      success: true,
      message: "删除成功",
    });
  } catch (err) {
    console.log("🚀 ~ file: updateJob.ts:48 ~ err:", err);
    res.statusCode = 500;
    res.json({
      code: 500,
      data: null,
      message: "",
      success: false,
    });
  }
}
