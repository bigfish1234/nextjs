import styles from "./index.module.css";
import dynamic from "next/dynamic";

const MyTable = dynamic(() => import("./components/TableComp"), {
  ssr: false,
});

const Admin = () => {
  return (
    <div className={styles["wrapper"]}>
      <MyTable />
    </div>
  );
};

export default Admin;
