import { NextApiResponse, NextApiRequest } from "next";
import joblist from "./joblist.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const querys = req?.query;
  // todo 拿到type 和 pos去数据库匹配
  const result = { status: true, id: "1111" }; // 处理结果
  console.log("test----->, querys, ----->", querys);
  // 操作完数据库，返回请求
  if (!result.status) {
    return res.status(500);
  }
  return res.status(200).json(joblist);
}
