import Image from "next/image";
import styles from "./index.module.css";

import img from "/public/images/pc/home/ICM.png";
import timeIcon from "/public/images/time-icon.png";
import arrow from "/public/images/arrow.png";

const InfomationBar = ({ content, isMobile }: any) => {
  const { time, title, description, imgUrl = img } = content;
  const [year, month, day] = time.split("-");

  return (
    <div className={styles["info-bar-wrapper"]}>
      {!isMobile ? (
        <>
          <div className={styles["time-line"]}>
            <span
              style={{
                fontSize: 24,
                lineHeight: "45px",
                marginBottom: 20,
                fontWeight: 600,
              }}
            >
              {month}月{day}日
            </span>
            <span style={{ fontSize: 18, lineHeight: "28px" }}>{year}年</span>
          </div>
          <div className={styles["info-content"]}>
            <h2>{title}</h2>
            <p>{description}</p>
            <a>查看详情</a>
          </div>
          <div className={styles["info-img"]}>
            <Image
              src={imgUrl}
              alt="硕磐企业智能管理操作系统EIMOS"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles["img-mobile"]}>
            <Image
              src={img}
              alt="硕磐企业智能管理操作系统EIMOS"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={styles["info-centent-mobile"]}>
            <div style={{ fontSize: 24, margin: "16px 0" }}>{title}</div>
            <div className={styles["source-time"]} style={{ marginBottom: 16 }}>
              <Image
                src={timeIcon}
                alt="time"
                width={14}
                height={14}
                style={{ marginRight: 5 }}
              />
              {year}-{month}-{day}
            </div>
            <p>{description}</p>
            <a>
              查看详情
              <Image
                src={arrow}
                alt="arrow"
                width={20}
                height={18}
                style={{ verticalAlign: "bottom" }}
              />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default InfomationBar;
