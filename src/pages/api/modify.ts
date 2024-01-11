import { NextApiResponse, NextApiRequest } from "next";
import db from "../../server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req?.body;
  const { account, password } = body;

  try {
    const userInfoList: any[] = await new Promise((resolve, reject) => {
      const sql = `SELECT * FROM USER`;
      db.query(sql, (err: any, results: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });

    const loginUser = userInfoList.filter(
      (item: any) => item.account == account
    );
    if (!loginUser.length) {
      res.statusCode = 500;
      res.json({
        code: 500,
        data: null,
        message: "该账户不存在",
        success: false,
      });
    } else {
      try {
        await new Promise((resolved, reject) => {
          // 插入数据
          const sql = `UPDATE USER SET password='${password}' where account='${account}';`;
          db.query(sql, (err: any, result: any) => {
            if (err) {
              reject(err);
            } else {
              resolved(result);
            }
          });
        });

        res.statusCode = 200;
        res.json({
          code: 200,
          data: null,
          success: true,
          message: "修改成功",
        });
      } catch (error) {
        res.statusCode = 500;
        res.json({
          code: 500,
          data: null,
          message: "修改失败!",
          success: false,
        });
      }
    }
  } catch (error) {
    res.statusCode = 500;
    res.json({
      code: 500,
      data: null,
      message: "",
      success: false,
    });
  }
}
