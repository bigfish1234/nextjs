import multer from "multer";
import fs from "fs";

// 配置存储引擎
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

if (!fs.existsSync("./public/uploads")) {
  fs.mkdirSync("./public/uploads", { recursive: true });
}

export default function handler(req, res) {
  upload.single("resume")(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        code: 500,
        message: "上传失败",
        data: "",
        success: false,
      });
    }

    // 文件上传成功
    return res.json({
      success: true,
      code: 200,
      message: "",
      data: null,
      filePath: `/uploads/${req.file.filename}`,
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
