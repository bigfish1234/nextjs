import { Modal, Upload, UploadProps, message } from "antd";
import styles from "../index.module.css";
import Image from "next/image";
import upload_icon from "/public/icon-upload.png";

const fileUpload = ({ open, setIsApply, fileList, setfileList }: any) => {
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
      width="40%"
      footer={null}
      onCancel={() => setIsApply(false)}
    >
      <div className={styles["upload-modal"]}>
        <div style={{ fontSize: 36, marginBottom: 20 }}>上传简历</div>
        <p>支持上传格式：pdf、doc、docx、zip、rar</p>
        <p>（上传文件最大不超过5M，建议压缩后上传）</p>
        <Image
          src={upload_icon}
          alt="upload"
          width={213}
          height={170}
          style={{ margin: "10px 0" }}
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

export default fileUpload;
