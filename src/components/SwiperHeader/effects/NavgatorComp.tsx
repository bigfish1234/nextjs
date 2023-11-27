import Image from "next/image";
import styles from "../index.module.css";
import expand_icon from "/public/expand-icon.png";
import logo from "/public/logo.png";
import { store } from "@/store";
import NavComp from "./NavComp";
import { LayoutWrapper, PageNavigator } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";

const NavgatorComp = ({ page }: any) => {
  const state = store();
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

  const goHomePage = () => router.push("/index");

  return (
    <div className={page == "detail" ? styles["detail-navigator"] : ""}>
      {isMobile ? (
        <div className={page === "detail" ? styles["detail-header_mb"] : ""}>
          <div className={styles["header"]}>
            <Image
              src={logo}
              alt="硕磐智能"
              className={styles["shuopan-logo"]}
              onClick={goHomePage}
            />
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
            <Image
              src={logo}
              alt="硕磐智能"
              className={styles["shuopan-logo"]}
              onClick={goHomePage}
            />
          </div>
          <NavComp />
        </div>
      )}
    </div>
  );
};

export default NavgatorComp;
