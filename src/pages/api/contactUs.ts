import { NextApiResponse, NextApiRequest } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const body = req?.body;
  // todo 拿到body 数据，存到数据库
  const result  = {status: true, id: '1111'}; // 处理结果

  // 操作完数据库，返回请求
  if(!result.status){
    return res.status(500);
  }
  return res.status(200).json({...result});
}