import nodemailer from "nodemailer";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { filePath,filename  } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.mxhichina.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const encodedFilename = `=?utf-8?B?${Buffer.from(decodeURIComponent(filename)).toString('base64')}?=`;

    const mailOptions = {
      from: `硕磐智能 ${process.env.EMAIL_FROM}`,
      to: process.env.EMAIL_TO,
      subject: "官网简历投递",
      text: "请注意查收！附件如下。",
      attachments: [
        {
          path: path.resolve("./public" + filePath), 
          filename: encodedFilename,
        },
      ],
    };

    try {
      await transporter.sendMail(mailOptions);
      return res
        .status(200)
        .json({ message: "发送成功", success: true, code: 200, data: "" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: error.message, success: false, code: 500, data: "" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
