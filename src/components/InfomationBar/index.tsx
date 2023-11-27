import Image from "next/image";
import styles from "./index.module.css";

import img from "/public/pc/home/ICM.png";
import timeIcon from "/public/time-icon.png";
import arrow from "/public/arrow.png";

const InfomationBar = ({ content, isMobile }: any) => {
  const { time, title, description, imgUrl = img } = content;
  const [year, month, day] = time.split("-");

  return (
    <div className={styles["info-bar-wrapper"]}>
      {!isMobile ? (
        <>
          <div className={styles["time-line"]}>
            <span style={{ fontSize: 32, fontWeight: 700 }}>{day} </span>
            <span style={{ fontSize: 32 }}>/</span>
            <span style={{ fontSize: 20 }}> {month}</span>
            <span style={{ fontSize: 20, marginLeft: 23 }}>{year}</span>
          </div>
          <div className={styles["info-content"]}>
            <h2>{title}</h2>
            <p>{description}</p>
            <a>查看详情</a>
          </div>
          <div className={styles["info-img"]}>
            <Image
              src={img}
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
