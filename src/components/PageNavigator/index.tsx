"use client";
import Link from "next/link";
import styles from "./index.module.css";
import { store } from "@/store";

const PageNavigator = () => {
  const state = store();

  const handleClick = (type: string) => {
    state.onPageChange(type);
    state.handleExpandChange(false);
  };

  return (
    <div className={styles["mobile-sidebar"]}>
      <div className={styles["mobile-sidebar-content"]}>
        <Link
          href="/home-page"
          onClick={() => handleClick("eimos")}
          style={{ color: state.page == "eimos" ? "#F96F25" : "black" }}
        >
          EIMOS
        </Link>
        <Link
          href="/info-center"
          onClick={() => handleClick("info")}
          style={{ color: state.page == "info" ? "#F96F25" : "black" }}
        >
          信息中心
        </Link>
        <Link
          href="/about-us"
          onClick={() => handleClick("about")}
          style={{ color: state.page == "about" ? "#F96F25" : "black" }}
        >
          关于我们
        </Link>
        <Link
          href="/join-us"
          onClick={() => handleClick("join")}
          style={{ color: state.page == "join" ? "#F96F25" : "black" }}
        >
          加入我们
        </Link>
      </div>
    </div>
  );
};

export default PageNavigator;
