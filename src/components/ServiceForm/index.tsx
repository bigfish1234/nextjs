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

  const phoneRules = [
    {
      required: true,
      message: "请输入您的电话号码",
    },
    () => ({
      validator(_: any, value: any) {
        const mobileRegex = /^1[3-9]\d{9}$/; // 简化的中国大陆手机正则表达式
        const landlineRegex = /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/; // 简化的中国大陆座机正则表达式，格式为区号-号码
        if (!value || mobileRegex.test(value) || landlineRegex.test(value)) {
          return Promise.resolve();
        }
        return Promise.reject(
          new Error("请输入有效的手机号码或座机号码(带区号)!")
        );
      },
    }),
  ];

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
            <Form.Item label="联系电话" name="phone" rules={phoneRules}>
              <Input placeholder="请输入手机号或座机号码" />
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
            <a href="tel:057183580606">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>电话：0571-83580606</span>
                <span>邮箱：info@boulderaitech.com</span>
              </div>
            </a>
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
