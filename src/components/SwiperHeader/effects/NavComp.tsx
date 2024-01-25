import { store } from "@/store";
import Link from "next/link";
import styles from "../index.module.css";
import { usePathname } from "next/navigation";

const NavComp = ({ page = "job-deatil" }: any) => {
  const state = store();
  const path = usePathname() as string;
  const handleClick = () => {
    state.handleOpenChange(false);
  };

  return (
    <div
      className={styles.navgator}
      style={{ color: page == "join" ? "#fff" : "black" }}
    >
      <Link
        href="/"
        style={{
          color:
            path == "/" ? "#F96F25" : path == "/job-detail" ? "black" : "white",
          borderBottom: path == "/" ? "2px solid #F96F25" : "",
        }}
        onClick={handleClick}
      >
        <span className={styles["hover-link"]}>EIMOS</span>
      </Link>
      <Link
        href="/information-center"
        style={{
          color:
            path == "/information-center"
              ? "#F96F25"
              : path == "/job-detail"
              ? "black"
              : "white",
          borderBottom:
            path == "/information-center" ? "2px solid #F96F25" : "",
        }}
        onClick={handleClick}
      >
        <span className={styles["hover-link"]}>信息中心</span>
      </Link>
      <Link
        href="/corporate-information"
        style={{
          color:
            path == "/corporate-information"
              ? "#F96F25"
              : path == "/job-detail"
              ? "black"
              : "white",
          borderBottom:
            path == "/corporate-information" ? "2px solid #F96F25" : "",
        }}
        onClick={handleClick}
      >
        <span className={styles["hover-link"]}>关于我们</span>
      </Link>
      <Link
        href="/recruitment"
        style={{
          color: ["/recruitment", "/job-detail"].includes(path)
            ? "#F96F25"
            : path == "/job-detail"
            ? "black"
            : "white",
          borderBottom: path == "/recruitment" ? "2px solid #F96F25" : "",
        }}
        onClick={handleClick}
      >
        <span className={styles["hover-link"]}>加入我们</span>
      </Link>
    </div>
  );
};

export default NavComp;
