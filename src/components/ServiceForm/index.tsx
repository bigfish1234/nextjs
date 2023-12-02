import styles from "./index.module.css";
import { Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";

const ServiceForm = ({ submit, form }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

  return (
    <div>
      <div
        style={
          isMobile
            ? {
                padding: "50px 0 70px",
              }
            : { padding: 0 }
        }
      >
        <div className={styles["form-content-wrapper"]}>
          <div
            className={styles["form-title"]}
            style={{ display: isMobile ? "block" : "none" }}
          >
            咨询服务
          </div>
          <Form
            size="middle"
            form={form}
            layout="vertical"
            className={styles["service-form"]}
          >
            <Form.Item
              label="姓名"
              name="name"
              rules={[{ required: true, message: "请输入名字" }]}
            >
              <Input placeholder="请输入姓名" />
            </Form.Item>
            <Form.Item
              label="邮箱"
              name="email"
              rules={[
                { required: true, message: "请输入正确的邮箱", type: "email" },
              ]}
            >
              <Input placeholder="请输入邮箱地址" />
            </Form.Item>
            <Form.Item
              label="单位名称"
              name="company"
              rules={[{ required: true, message: "请输入单位名称" }]}
            >
              <Input placeholder="请输入单位名称" />
            </Form.Item>
            <Form.Item
              label="联系电话"
              name="phone"
              rules={[{ required: true, message: "请输入正确联系电话" }]}
            >
              <Input
                placeholder="请输入电话号码"
                addonBefore={
                  <Select
                    placeholder=""
                    defaultValue="+86"
                    style={{ width: 80 }}
                  />
                }
              />
            </Form.Item>
            <Form.Item label="需求描述" name="detail">
              <Input.TextArea rows={4} placeholder="请输入需求描述" />
            </Form.Item>
          </Form>
          <div className={styles["contact-info"]}>
            <span
              style={{ fontWeight: 600, paddingBottom: 10, display: "block" }}
            >
              联系我们
            </span>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>电话：0571-83580606</span>
              <span>邮箱：info@boulderaitech.com</span>
            </div>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className={styles["submit-btn-wrapper"]}>
          <div className={styles["submit-btn"]} onClick={submit}>
            提 交
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceForm;
