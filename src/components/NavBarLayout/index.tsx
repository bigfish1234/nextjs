// "use client";

import Image from "next/image";
import Link from "next/link";
import { store } from "@/store";
import styles from "./index.module.css";

import expand_icon from "/public/expand-icon.png";
import logo from "/public/logo.png";

const NavBarLayout = ({ children }: any) => {
  const state = store();
  const handleClick = (type: string) => {
    state.onPageChange(type);
  };
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["wrapper-header"]}>
        <Image
          src={expand_icon}
          alt="expand"
          id="expand"
          className={styles["expand"]}
          onClick={() => {
            state.handleExpandChange(!state.isExpand);
            const dom = document.getElementById("expand");
            if (dom) {
              state.isExpand && (dom.style.rotate = "0deg");
              !state.isExpand && (dom.style.rotate = "90deg");
            }
          }}
        />
        <Image src={logo} alt="logo" className={styles["logo"]} />
      </div>
      <div className="wrapper-center">{children}</div>
      {state.isExpand && (
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
      )}
    </div>
  );
};

export default NavBarLayout;
