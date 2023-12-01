import Link from "next/link";
import styles from "./index.module.css";
import { store } from "@/store";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const state = store();
  const path = usePathname() as string;

  const handleClick = () => {
    state.handleExpandChange(false);
  };

  return (
    <div
      className={
        state.isExpand
          ? `${styles["mobile-sidebar"]} ${styles["show-sidebar"]}`
          : `${styles["mobile-sidebar"]}`
      }
    >
      <div className={styles["mobile-sidebar-content"]}>
        <Link
          href="/"
          onClick={handleClick}
          style={{ color: path == "/" ? "#F96F25" : "black" }}
        >
          EIMOS
        </Link>
        <Link
          href="/information-center"
          onClick={handleClick}
          style={{ color: path == "/information-center" ? "#F96F25" : "black" }}
        >
          信息中心
        </Link>
        <Link
          href="/corporate-information"
          onClick={handleClick}
          style={{
            color: path == "/corporate-information" ? "#F96F25" : "black",
          }}
        >
          关于我们
        </Link>
        <Link
          href="/recruitment"
          onClick={handleClick}
          style={{
            color: ["/recruitment", "/job-detail"].includes(path)
              ? "#F96F25"
              : "black",
          }}
        >
          加入我们
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
