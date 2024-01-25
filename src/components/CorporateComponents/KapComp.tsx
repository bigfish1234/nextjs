import Image from "next/image";
import styles from "./index.module.css";

import backgroundImg from "/public/images/pc/about/kap.png";
import leftIcon from "/public/images/left-icon.png";
import rightIcon from "/public/images/right-click.png";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";
import { developList } from "@/lib/const";
import DevHistory from "./DevHistory";

const KapComp = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sliding = (type: string) => {
    const dom = document.getElementById("slide");

    const len = 500;
    if (dom) {
      if (type == "left") {
        dom.scrollBy({
          left: -len,
          behavior: "smooth",
        });
      } else {
        dom.scrollBy({
          left: len,
          behavior: "smooth",
        });
      }
    }
  };

  const btnOverEvent = (type: string, value: number) => {
    const btnDom = document.getElementById(type);
    if (btnDom) {
      !value
        ? (btnDom.style.boxShadow = "0px 3px 8px 0px rgba(0, 0, 0, 0.12)")
        : (btnDom.style.boxShadow = "");
    }
  };

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

  return (
    <div className={styles["develop-history-wrapper"]}>
      <div className={styles["develop-history"]} id="slide">
        <DevHistory />
      </div>
      {/* {!isMobile && (
        <>
          <div
            className={styles["arrow-icon"]}
            style={{ left: -70 }}
            id="leftBtn"
            onMouseEnter={() => btnOverEvent("leftBtn", 0)}
            onMouseLeave={() => btnOverEvent("leftBtn", 1)}
            onClick={() => sliding("left")}
          >
            <Image
              id="left-arrow"
              src={leftIcon}
              alt="left-icon"
              className={styles["arrow-icon-img"]}
              style={{ opacity: 0.3 }}
              onClick={() => {
                const left = document.getElementById("left-arrow");
                left && (left.style.opacity = "0.3");

                const right = document.getElementById("right-arrow");
                right && (right.style.opacity = "1");
              }}
            />
          </div>
          <div
            className={styles["arrow-icon"]}
            style={{ right: -70 }}
            onClick={() => sliding("right")}
            onMouseEnter={() => btnOverEvent("rightBtn", 0)}
            onMouseLeave={() => btnOverEvent("rightBtn", 1)}
            id="rightBtn"
          >
            <Image
              id="right-arrow"
              src={rightIcon}
              alt="right-icon"
              className={styles["arrow-icon-img"]}
              onClick={() => {
                const left = document.getElementById("left-arrow");
                left && (left.style.opacity = "1");

                const right = document.getElementById("right-arrow");
                right && (right.style.opacity = "0.3");
              }}
            />
          </div>
        </>
      )} */}
    </div>
  );
};
export default KapComp;
