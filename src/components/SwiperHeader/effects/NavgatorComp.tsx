"use client";
import Image from "next/image";
import styles from "../index.module.css";
import { isMobileDevice } from "@/utils/isMobileDevice";
import expand_icon from "/public/expand-icon.png";
import logo from "/public/logo.png";
import { store } from "@/store";
import NavComp from "./NavComp";
import { PageNavigator } from "@/components";

const NavgatorComp = ({ page }: any) => {
  const isMobile = isMobileDevice();
  const state = store();

  return (
    <div>
      {isMobile ? (
        <div className={page === "detail" ? styles["detail-header_mb"] : ""}>
          <div className={styles["header"]}>
            <Image src={logo} alt="logo" className={styles["shuopan-logo"]} />
          </div>
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
        </div>
      ) : (
        <div className={page === "detail" ? styles["detail-header"] : ""}>
          <div className={styles["header"]}>
            <Image src={logo} alt="logo" className={styles["shuopan-logo"]} />
          </div>
          <NavComp />
        </div>
      )}
      {state.isExpand && <PageNavigator />}
    </div>
  );
};

export default NavgatorComp;
