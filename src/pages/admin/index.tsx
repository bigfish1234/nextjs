import { Button, Space } from "antd";
import styles from "./index.module.css";
import dynamic from "next/dynamic";
import { signOut } from "next-auth/react";

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
  return (
    <div>
      <MyHeader />
      <MyTable />
    </div>
  );
};

export default Admin;
