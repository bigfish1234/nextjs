import { Button, Space } from "antd";
import { signOut, useSession } from "next-auth/react";

const TabHeader = () => {
  const { data: session } = useSession();
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
      <span style={{ fontSize: 24 }}>职位管理</span>
      <Space size={20}>
        <span>账号：{session?.user?.name}</span>
        <Button onClick={() => signOut({ callbackUrl: "/auth/signin" })}>
          退出登录
        </Button>
      </Space>
    </div>
  );
};

export default TabHeader;
