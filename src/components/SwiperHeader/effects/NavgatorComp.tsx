import Image from "next/image";
import styles from "../index.module.css";
import expand_icon from "/public/images/menu.svg";
import expand_icon2 from "/public/images/menu_black.svg";
import logo from "/public/images/logo.svg";
import { store } from "@/store";
import NavComp from "./NavComp";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";

const NavgatorComp = ({ page }: any) => {
  const state = store();
  const router = useRouter();
  const path = usePathname() as string;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

  const goHomePage = () => router.push("/");

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
            src={path == "/corporate-information" ? expand_icon2 : expand_icon}
            alt="expand"
            id="expand"
            className={styles["expand-icon"]}
            style={{ position: state.isExpand ? "fixed" : "absolute" }}
            onClick={() => {
              state.handleExpandChange(!state.isExpand);
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
