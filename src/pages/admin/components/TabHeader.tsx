import { Button, Space } from "antd";
import { signOut } from "next-auth/react";

const TabHeader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: 50,
        boxShadow: "0px 4px 16px 0px rgba(190, 190, 190, 0.5)",
        backgroundColor: "#fff",
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        zIndex: 9,
      }}
    >
      <span style={{ fontSize: 24 }}>后台管理系统</span>
      <Space>
        <span>用户</span>
        <Button onClick={() => signOut({ callbackUrl: "/auth/signin" })}>
          登出
        </Button>
      </Space>
    </div>
  );
};

export default TabHeader;
