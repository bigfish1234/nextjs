"use client";

import Link from "next/link";
import styles from "./index.module.css";
import { store } from "@/store";
// import { isMobileDevice } from "@/utils/isMobileDevice";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const state = store();
  // const isMobile = isMobileDevice();
  const path = usePathname() as string;

  const handleClick = () => {
    state.handleExpandChange(false);
  };

  return (
    <>
      {state.isMobile && state.isExpand && (
        <div className={styles["mobile-sidebar"]}>
          <div className={styles["mobile-sidebar-content"]}>
            <Link
              href="/home-page"
              onClick={handleClick}
              style={{ color: path == "/home-page" ? "#F96F25" : "black" }}
            >
              EIMOS
            </Link>
            <Link
              href="/info-center"
              onClick={handleClick}
              style={{ color: path == "/info-center" ? "#F96F25" : "black" }}
            >
              信息中心
            </Link>
            <Link
              href="/about-us"
              onClick={handleClick}
              style={{ color: path == "/about-us" ? "#F96F25" : "black" }}
            >
              关于我们
            </Link>
            <Link
              href="/join-us"
              onClick={handleClick}
              style={{
                color: ["/join-us", "/job-detail"].includes(path)
                  ? "#F96F25"
                  : "black",
              }}
            >
              加入我们
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
