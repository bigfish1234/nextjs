import { store } from "@/store";
import Link from "next/link";
import styles from "../index.module.css";
import { usePathname } from "next/navigation";

const NavComp = ({ page }: any) => {
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
        prefetch
        href="/index"
        style={{
          color:
            path == "/index"
              ? "#F96F25"
              : path == "/recruitment"
              ? "white"
              : "black",
        }}
        onClick={handleClick}
      >
        EIMOS
      </Link>
      <Link
        prefetch
        href="/information-center"
        style={{
          color:
            path == "/information-center"
              ? "#F96F25"
              : path == "/recruitment"
              ? "white"
              : "black",
        }}
        onClick={handleClick}
      >
        信息中心
      </Link>
      <Link
        prefetch
        href="/corporate-information"
        style={{
          color:
            path == "/corporate-information"
              ? "#F96F25"
              : path == "/recruitment"
              ? "white"
              : "black",
        }}
        onClick={handleClick}
      >
        关于我们
      </Link>
      <Link
        prefetch
        href="/recruitment"
        style={{
          color: ["/recruitment", "/job-detail"].includes(path)
            ? "#F96F25"
            : "black",
        }}
        onClick={handleClick}
      >
        加入我们
      </Link>
    </div>
  );
};

export default NavComp;
