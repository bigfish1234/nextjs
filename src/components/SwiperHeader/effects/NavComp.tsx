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
        href="/home-page"
        style={{
          color:
            path == "/home-page"
              ? "#F96F25"
              : path == "/join-us"
              ? "white"
              : "black",
        }}
        onClick={handleClick}
      >
        EIMOS
      </Link>
      <Link
        prefetch
        href="/info-center"
        style={{
          color:
            path == "/info-center"
              ? "#F96F25"
              : path == "/join-us"
              ? "white"
              : "black",
        }}
        onClick={handleClick}
      >
        信息中心
      </Link>
      <Link
        prefetch
        href="/about-us"
        style={{
          color:
            path == "/about-us"
              ? "#F96F25"
              : path == "/join-us"
              ? "white"
              : "black",
        }}
        onClick={handleClick}
      >
        关于我们
      </Link>
      <Link
        prefetch
        href="/join-us"
        style={{
          color: ["/join-us", "/join-us/job-detail"].includes(path)
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
