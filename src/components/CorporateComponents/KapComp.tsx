import Image from "next/image";
import styles from "./index.module.css";

import backgroundImg from "/public/images/pc/about/kap.png";
import leftIcon from "/public/images/left-icon.png";
import rightIcon from "/public/images/right-click.png";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";
import { developList } from "@/lib/const";

const KapComp = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sliding = (type: string) => {
    const dom = document.getElementById("slide");
    const flag = window.matchMedia(
      "only screen and (max-width: 1440px)"
    ).matches;

    const len = flag ? 350 : 500;
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
        {developList.map((item: any, index: number) => {
          const [top, bottom] = item;
          return (
            <div key={index} className={styles["history-content-wrapper"]}>
              <div className={styles["history-content"]}>
                <div style={{ padding: 40 }}>
                  <p className={styles["time"]}>{top.time}</p>
                  <p className={styles["title"]}>{top.title}</p>
                </div>
                <div style={{ padding: "60px 40px 40px" }}>
                  <p className={styles["time"]}>{bottom.time}</p>
                  <p className={styles["title"]}>{bottom.title}</p>
                </div>
              </div>
              <Image
                src={backgroundImg}
                alt={`${top.time}-${top.title} ${bottom.time}-${bottom.title}`}
                loading="lazy"
                className={styles["kap-img"]}
              />
            </div>
          );
        })}
      </div>
      {!isMobile && (
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
              src={leftIcon}
              alt="left-icon"
              className={styles["arrow-icon-img"]}
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
              src={rightIcon}
              alt="right-icon"
              className={styles["arrow-icon-img"]}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default KapComp;
