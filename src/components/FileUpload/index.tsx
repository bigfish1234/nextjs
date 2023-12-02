import { Modal, Upload, UploadProps, message } from "antd";
import styles from "./index.module.css";
import Image from "next/image";
import upload_icon from "/public/images/icon-upload.png";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";

const FileUpload = ({ open, setIsApply, fileList, setfileList }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

  // 将文件上传至磁盘存储中
  const handleChange: UploadProps["onChange"] = async (info: any) => {
    if (info.file.status === "done") {
      message.success(`上传成功`);
      setfileList(info.fileList[0]);
    } else if (info.file.status === "error") {
      message.error(`上传失败`);
    }
  };

  const props: UploadProps = {
    action: "/api/upload",
    maxCount: 1,
    accept: ".pdf, .doc, .docx, .zip, .rar, .xlsx",
    onChange: handleChange,
  };

  // 获取上传的文件发送到邮件
  const submit = () => {
    setIsApply(false);
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
          <Upload {...props}>
            <div
              className={styles["upload-btn"]}
              style={{
                color: "#fff",
                backgroundColor: "#F96F25",
              }}
            >
              上传简历
            </div>
          </Upload>

          <div
            style={{
              color: "#F96F25",
              border: "1px solid #F96F25",
            }}
            className={styles["upload-btn"]}
            onClick={submit}
          >
            确定
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FileUpload;
