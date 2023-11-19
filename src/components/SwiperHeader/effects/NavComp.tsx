import { store } from "@/store";
import Link from "next/link";
import styles from "../index.module.css";

const NavComp = ({ page }: any) => {
  const state = store();

  const handleClick = (type: string) => {
    state.onPageChange(type);
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
            state.page == "eimos"
              ? "#F96F25"
              : state.page == "join"
              ? "white"
              : "black",
        }}
        onClick={() => handleClick("eimos")}
      >
        EIMOS
      </Link>
      <Link
        prefetch
        href="/info-center"
        style={{
          color:
            state.page == "info"
              ? "#F96F25"
              : state.page == "join"
              ? "white"
              : "black",
        }}
        onClick={() => handleClick("info")}
      >
        信息中心
      </Link>
      <Link
        prefetch
        href="/about-us"
        style={{
          color:
            state.page == "about"
              ? "#F96F25"
              : state.page == "join"
              ? "white"
              : "black",
        }}
        onClick={() => handleClick("about")}
      >
        关于我们
      </Link>
      <Link
        prefetch
        href="/join-us"
        style={{
          color: ["join", "detail"].includes(state.page) ? "#F96F25" : "black",
        }}
        onClick={() => handleClick("join")}
      >
        加入我们
      </Link>
    </div>
  );
};

export default NavComp;
