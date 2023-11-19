"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../index.module.css";
import { isMobileDevice } from "@/utils/isMobileDevice";
import expand_icon from "/public/expand-icon.png";
import { store } from "@/store";

const NavgatorComp = ({ page }: any) => {
  const isMobile = isMobileDevice();
  const state = store();

  const handleClick = (type: string) => {
    state.onPageChange(type);
    state.handleOpenChange(false);
  };
  return (
    <>
      {isMobile ? (
        <Image
          src={expand_icon}
          alt="expand"
          id="expand"
          className={styles["expand-icon"]}
          style={{ position: state.isExpand ? "fixed" : "absolute" }}
          onClick={() => {
            state.handleExpandChange(!state.isExpand);
            const dom = document.getElementById("expand");
            if (dom) {
              state.isExpand
                ? (dom.style.rotate = "0deg")
                : (dom.style.rotate = "90deg");
            }
          }}
        />
      ) : (
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
            style={{ color: state.page == "join" ? "#F96F25" : "black" }}
            onClick={() => handleClick("join")}
          >
            加入我们
          </Link>
        </div>
      )}
    </>
  );
};

export default NavgatorComp;
