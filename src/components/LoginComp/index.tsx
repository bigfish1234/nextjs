/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input } from "antd";
import styles from "./index.module.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useState } from "react";

const LoginComp = ({
  handleCancel,
  handleLogin,
  loading,
  handleConfirm,
}: any) => {
  const [form] = Form.useForm();
  const [isMoify, setIsModify] = useState<boolean>(false);

  const renderLoginForm = () => {
    return (
      <>
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
        <Form.Item>
          <Button
            type="link"
            style={{ float: "right" }}
            onClick={() => setIsModify(true)}
          >
            修改密码
          </Button>
        </Form.Item>
      </>
    );
  };

  const passwordComplexityRule = ({ getFieldValue }: any) => ({
    validator(_: any, value: any) {
      if (
        !value ||
        (/[A-Z]/.test(value) &&
          /[a-z]/.test(value) &&
          /\d/.test(value) &&
          /[\!\@\#\$\%\^\&\*]/.test(value) &&
          value.length >= 8)
      ) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("复杂度不够！"));
    },
  });

  const renderModifyForm = () => {
    return (
      <>
        <Form.Item
          label="账号"
          name="user"
          rules={[{ required: true, message: "账号不能为空" }]}
          labelCol={{ span: 6 }}
        >
          <Input type="text" auto-complete="off" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          tooltip="由字母大小写，特殊字符和数字组成"
          labelCol={{ span: 6 }}
          rules={[
            { required: true, message: "密码不能为空!" },
            // 应用密码复杂度校验规则
            passwordComplexityRule,
          ]}
        >
          <Input.Password
            auto-complete="off"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="modifyPassword"
          rules={[{ required: true, message: "密码不能为空" }]}
          labelCol={{ span: 6 }}
        >
          <Input.Password
            auto-complete="off"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
      </>
    );
  };

  return (
    <div className={styles.login}>
      <div className={styles.header}>后台管理系统</div>
      <Form form={form}>
        {!isMoify ? renderLoginForm() : renderModifyForm()}
      </Form>
      <div className={styles.btn}>
        {!isMoify ? (
          <>
            <div className={styles.cancelbtn} onClick={handleCancel}>
              取 消
            </div>
            <div className={styles.loginbtn} onClick={() => handleLogin(form)}>
              {!loading ? <span>登 录</span> : <span>登 录 中...</span>}
            </div>
          </>
        ) : (
          <>
            <div
              className={styles.cancelbtn}
              onClick={() => setIsModify(false)}
            >
              取消
            </div>
            <div
              className={styles.loginbtn}
              onClick={() => {
                handleConfirm(form, setIsModify);
              }}
            >
              确认
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginComp;
