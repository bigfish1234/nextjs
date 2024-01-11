import { Modal, Upload, UploadProps, message } from "antd";
import styles from "./index.module.css";
import Image from "next/image";
import upload_icon from "/public/images/icon-upload.png";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";
import axios from "axios";

const FileUpload = ({ open, setIsApply, fileList, setfileList }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

  // 上传简历
  const handleUpload = async () => {
    const formData = new FormData();
    if (Array.isArray(fileList) && fileList.length) {
      formData.append("resume", fileList[0]);
      try {
        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setfileList([]);
        return response.data.filePath;
      } catch (error) {
        message.error("上传失败！");
        console.error("Error uploading file:", error);
      }
    } else {
      message.warning("请先上传简历");
    }
  };

  // 发送邮件
  const handleSendEmail = async () => {
    const filePath = await handleUpload();
    if (!filePath) return;

    try {
      await axios.post("/api/sendResume", {
        filePath,
        filename: encodeURIComponent(fileList[0].name),
      });
      message.success("简历投递成功！");
      setIsApply(false);
    } catch (error) {
      message.error("投递失败，请重试！");
      console.error(error);
    }
  };

  const props = {
    onRemove(file: any) {
      setfileList([]);
    },
    beforeUpload(file: any) {
      setfileList([file]);
      return false;
    },
    fileList,
  };

  return (
    <Modal
      open={open}
      width={isMobile ? "100%" : "40%"}
      style={{ marginTop: 120 }}
      footer={null}
      onCancel={() => setIsApply(false)}
    >
      <div className={styles["upload-modal"]}>
        <div
          className={
            isMobile ? styles["modal-title-mb"] : styles["modal-title-pc"]
          }
        >
          上传简历
        </div>
        <p>支持上传格式：pdf、doc、docx、zip、rar</p>
        <p>（上传文件最大不超过5M，建议压缩后上传）</p>
        <Image
          src={upload_icon}
          alt="文件上传"
          className={isMobile ? styles["img-mb"] : styles["img-pc"]}
        />
        <p style={{ color: "#F96F25" }}>请上传您的简历</p>
        <div className={styles["upload-btn-wrapper"]}>
          <Upload {...props} maxCount={1}>
            <div
              className={styles["upload-btn"]}
              style={{
                color: "#fff",
                backgroundColor: "#F96F25",
              }}
            >
              上 传
            </div>
          </Upload>

          <div
            style={{
              color: "#F96F25",
              border: "1px solid #F96F25",
            }}
            className={styles["upload-btn"]}
            onClick={handleSendEmail}
          >
            确 定
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FileUpload;
