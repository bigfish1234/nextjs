/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Input } from "antd";
import styles from "./index.module.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const LoginComp = ({ handleCancel, handleLogin, loading }: any) => {
  const [form] = Form.useForm();

  return (
    <div className={styles.login}>
      <div className={styles.header}>后台管理系统</div>
      <Form form={form}>
        <Form.Item
          label="账号"
          name="user"
          rules={[{ required: true, message: "账号不能为空" }]}
        >
          <Input type="text" auto-complete="off" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "密码不能为空" }]}
        >
          <Input.Password
            auto-complete="off"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
      </Form>
      <div className={styles.btn}>
        <div className={styles.cancelbtn} onClick={handleCancel}>
          取 消
        </div>
        <div className={styles.loginbtn} onClick={() => handleLogin(form)}>
          {!loading ? <span>登 录</span> : <span>登 录 中...</span>}
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
