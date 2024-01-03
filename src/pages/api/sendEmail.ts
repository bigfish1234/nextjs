import { NextApiResponse, NextApiRequest } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = req?.body;
    const { name, email, company, phone, detail = "", createtime } = data;
    // 创建transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.mxhichina.com",
      port: 25,
      service: "smtp.mxhichina.com",
      auth: {
        user: process.env.EMAIL_FROM, //你的邮箱帐号
        pass: process.env.EMAIL_PASSWORD, //你的邮箱密码
      },
    });
    // 配置邮件信息
    const mailInfo = {
      from: `"硕磐智能"<${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_FORM,
      subject: "来源：官网咨询",
      html: `
        <h1>你好，您的邮件已收到！</h1>
        <hr/>
        <p>
          <b>姓名：</b>${name}<br/>
          <b>邮箱：</b>${email}<br/>
          <b>单位名称：</b>${company}<br/>
          <b>联系电话：</b>${phone}<br/>
          <b>需求描述：</b>${detail}<br/>
          <b>日期：</b>${createtime}<br/>
         </p>
      `,
    };

    // 发送邮件
    transporter.sendMail(mailInfo, (error, info) => {
      if (error) {
        return console.log("发送失败:", error);
      }
      transporter.close();
    });

    res.statusCode = 200;
    res.json({
      code: 200,
      data: "",
      success: true,
      message: "",
    });
  } catch (err) {
    res.statusCode = 500;
    res.json({
      code: 500,
      data: null,
      message: "类型获取失败!",
      success: false,
    });
  }
}
