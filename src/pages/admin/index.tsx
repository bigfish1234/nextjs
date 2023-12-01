import dynamic from "next/dynamic";

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
