import { NextApiResponse, NextApiRequest } from "next";
import db from "../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req?.body;
  const { name, email, company, phone, detail, createtime } = body;

  try {
    await new Promise((resolved, reject) => {
      // 插入数据
      db.query(
        {
          sql: `INSERT INTO spzn.CONSULTATION_INFO (name,email,company,phone,detail,createtime) VALUES (?,?,?,?,?,?);`,
          values: [name, email, company, phone, detail, createtime],
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
    res.statusCode = 500;
    res.json({
      code: 500,
      data: null,
      message: "提交失败!",
      success: false,
    });
  }
}
