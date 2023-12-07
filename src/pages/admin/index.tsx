import { message } from "antd";
import Metadata from "next/head";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const MyTable = dynamic(
  () => import("../../components/AdminComponents/TableComp"),
  {
    ssr: false,
  }
);

const MyHeader = dynamic(
  () => import("../../components/AdminComponents/TabHeader"),
  {
    ssr: false,
  }
);

const Admin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return null;
  }

  if (!session) {
    router.push("/auth/signin");
    message.error("请先登录");
    return null;
  }
  return (
    <div>
      <Metadata>
        <title>职位管理</title>
      </Metadata>
      <MyHeader />
      <MyTable />
    </div>
  );
};

export default Admin;
