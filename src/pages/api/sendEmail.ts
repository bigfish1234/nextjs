import { NextApiResponse, NextApiRequest } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = req?.body;
    const { name, email, company, phone, detail = "" } = data;
    // 创建transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.mxhichina.com",
      port: 25,
      service: "smtp.mxhichina.com ",
      auth: {
        user: "yuyunyun@boulderaitech.com", //你的邮箱帐号
        pass: "yyy101400!@#", //你的邮箱密码
      },
    });
    // 配置邮件信息
    const mailInfo = {
      from: `"硕磐智能"<yuyunyun@boulderaitech.com>`,
      to: "yuyunyun@boulderaitech.com",
      subject: "来源：官网咨询表单", // Subject line
      html: `
        <h1>你好，您的邮件已收到！</h1>
        <hr/>
        <p>
          <b>姓名：${name}</b><br/>
          <b>邮箱：${email}</b><br/>
          <b>单位名称：${company}</b><br/>
          <b>联系电话：${phone}</b><br/>
          <b>需求描述：${detail}</b><br/>
         </p>
      `,
    };

    // 发送邮件
    transporter.sendMail(mailInfo, (error, info) => {
      if (error) {
        return console.log("发送失败:", error);
      }
      transporter.close();
      console.log("发送成功:", info.response);
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
