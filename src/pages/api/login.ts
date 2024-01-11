import { NextApiResponse, NextApiRequest } from "next";
import db from "../../server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { userName, password } = req.body;

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
      (item: any) => item.account == userName
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
      const { account, name, id } = loginUser[0];
      if (userName == account && password == loginUser[0].password) {
        res.status(200).json({ name, id });
      } else {
        res.status(500).json({
          code: 500,
          data: null,
          message: "账号密码不正确",
          success: false,
        });
      }
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
