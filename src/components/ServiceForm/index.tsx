"use client";
import styles from "./index.module.css";
import { Form, Input, Select } from "antd";

const ServiceForm = () => {
  const [form] = Form.useForm();

  const submit = () => {
    // console.log(form.getFieldsValue());
  };

  return (
    <div className={styles["form-wrapper"]}>
      <div style={{ marginBottom: 24, fontSize: 20 }}>咨询服务</div>
      <Form
        size="middle"
        form={form}
        layout="vertical"
        className={styles["service-form"]}
      >
        <Form.Item label="姓名" name="name" rules={[{ required: true }]}>
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item label="邮箱" name="email" rules={[{ required: true }]}>
          <Input placeholder="请输入邮箱地址" />
        </Form.Item>
        <Form.Item label="单位名称" name="company" rules={[{ required: true }]}>
          <Input placeholder="请输入单位名称" />
        </Form.Item>
        <Form.Item label="联系电话" name="phone" rules={[{ required: true }]}>
          <Input
            placeholder="请输入电话号码"
            addonBefore={
              <Select placeholder="" defaultValue="+86" style={{ width: 80 }} />
            }
          />
        </Form.Item>
        <Form.Item label="需求描述" name="des" rules={[{ required: true }]}>
          <Input.TextArea rows={4} placeholder="请输入需求描述" />
        </Form.Item>
      </Form>
      <div className={styles["submit-btn"]} onClick={submit}>
        提交
      </div>
    </div>
  );
};

export default ServiceForm;
