import styles from "./index.module.css";
import Image from "next/image";
import img from "@/images/contract.png";

const InfomationBar = ({ content }: any) => {
  const { time, title, description, imgUrl = img } = content;
  const [year, month, day] = time.split("-");

  return (
    <div className={styles["info-bar-wrapper"]}>
      <div className={styles["time-line"]}>
        <span style={{ fontSize: 32, fontWeight: 700 }}>{day} </span>
        <span style={{ fontSize: 32 }}>/</span>
        <span style={{ fontSize: 20 }}> {month}</span>
        <span style={{ fontSize: 20, marginLeft: 23 }}>{year}</span>
      </div>
      <div className={styles["info-content"]}>
        <div>{title}</div>
        <p>{description}</p>
        <a>查看详情</a>
      </div>
      <div className={styles["info-img"]}>
        <Image src={img} alt="img" style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
};

export default InfomationBar;
