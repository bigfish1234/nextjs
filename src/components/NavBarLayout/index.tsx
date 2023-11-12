"use client";
import { store } from "@/store";
import styles from "./index.module.css";
import { Imgs } from "@/images/mobileImg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = ({ children }: any) => {
  const [isExpand, setIsExpand] = useState(false);
  const state = store();
  const handleClick = (type: string) => {
    state.onPageChange(type);
  };
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["wrapper-header"]}>
        <Image
          src={Imgs.expand}
          alt="expand"
          id="expand"
          className={styles["expand"]}
          onClick={() => {
            setIsExpand(!isExpand);
            const dom = document.getElementById("expand");
            if (dom) {
              isExpand && (dom.style.rotate = "0deg");
              !isExpand && (dom.style.rotate = "90deg");
            }
          }}
        />
        <Image src={Imgs.logo} alt="logo" className={styles["logo"]} />
      </div>
      <div className="wrapper-center">{children}</div>
      {isExpand && (
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

export default NavBar;
