import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";

const storage = multer.diskStorage({
  destination: "../uploads/",
  filename: function (
    req: any,
    file: { originalname: any },
    cb: (arg0: null, arg1: any) => void
  ) {
    cb(null, file.originalname);
  },
});

// 创建 multer 实例并配置存储引擎
const upload = multer({ storage: storage });

// 定义文件上传的路由处理程序
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 使用 upload.single() 方法处理单个文件上传
  upload.single("file")(req, res, (err: any) => {
    if (err) {
      // 处理错误情况
      console.error(err);
      return res.status(500).json({
        code: 500,
        message: "文件上传失败",
        data: null,
        success: false,
      });
    }

    // 文件上传成功
    return res.json({ success: true, code: 200, message: "", data: null });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
