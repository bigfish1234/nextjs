import styles from "../index.module.css";
import backgroundImg from "../imgs/kap.png";
import Image from "next/image";
import leftIcon from "../imgs/left.png";
import rightIcon from "../imgs/right.png";
import { isMobile } from "react-device-detect";

const KapComp = () => {
  const developList = [
    [
      { time: "2021.1", title: "正式运营" },
      { time: "2021.4", title: "业务架构设计" },
    ],
    [
      { time: "2021.9", title: "产品开发" },
      { time: "2022.1", title: "EIMOS 1.0版本发布" },
    ],
    [
      { time: "2022.1", title: "xx工业互联网项目中标" },
      { time: "2022.2", title: "广州xx项目启动" },
    ],
    [
      { time: "2022.3", title: "杭州xx V1.0版本正式上线" },
      { time: "2022.6", title: "金华xx项目启动" },
    ],
    [
      { time: "2022.9", title: "广州xx项目正式上线" },
      { time: "2023.1", title: "广州xx项目正式上线" },
    ],
    [
      { time: "2022.9", title: "广州xx项目正式上线" },
      { time: "2023.1", title: "广州xx项目正式上线" },
    ],
    [
      { time: "2022.9", title: "广州xx项目正式上线" },
      { time: "2023.1", title: "广州xx项目正式上线" },
    ],
    [
      { time: "2022.9", title: "广州xx项目正式上线" },
      { time: "2023.1", title: "广州xx项目正式上线" },
    ],
    [
      { time: "2022.9", title: "广州xx项目正式上线" },
      { time: "2023.1", title: "..." },
    ],
  ];

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
                alt="dev"
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
              alt="left"
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
              alt="left"
              className={styles["arrow-icon-img"]}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default KapComp;
