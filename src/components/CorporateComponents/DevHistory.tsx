import Image from "next/image";
import styles from "./index.module.css";
import n1 from "/public/images/n1.png";
import n2 from "/public/images/n2.png";
import n3 from "/public/images/n3.png";
import n4 from "/public/images/n4.png";
import n5 from "/public/images/n5.png";
import n6 from "/public/images/n6.png";
import n7 from "/public/images/n7.png";

export default function DevHistory() {
  const ForwardItem = ({ color, time, title, imgUrl }: any) => {
    return (
      <div className={styles["dev-item"]} style={{ marginBottom: 145 }}>
        <span className={styles["dev-item-time"]}>{time}</span>
        <div className={styles["divider"]} style={{ backgroundColor: color }} />
        <span className={styles["dev-item-title"]}>{title}</span>
        <Image src={imgUrl} alt="" className={styles["img-style"]} />
      </div>
    );
  };

  const ReverseItem = ({ color, time, title, imgUrl }: any) => {
    return (
      <div className={styles["dev-item"]} style={{ marginTop: 145 }}>
        <Image src={imgUrl} alt="" className={styles["img-style"]} />
        <span className={styles["dev-item-time"]}>{time}</span>
        <div
          className={styles["divider"]}
          style={{ backgroundColor: color }}
        ></div>
        <span className={styles["dev-item-title"]}>{title}</span>
      </div>
    );
  };
  return (
    <div className={styles["dev-history-wrapper"]}>
      <ForwardItem
        color="#FF7337"
        time="2021.01"
        title="正式运营"
        imgUrl={n1}
      />
      <div className={styles["divider-bar"]}></div>
      <ReverseItem
        color="#6793EA"
        time="2021.04"
        title="业务架构设计"
        imgUrl={n2}
      />{" "}
      <div className={styles["divider-bar"]}></div>
      <ForwardItem
        color="#A987DF"
        time="2021.09"
        title="产品开发"
        imgUrl={n3}
      />{" "}
      <div className={styles["divider-bar"]}></div>
      <ReverseItem
        color="#F69F40"
        time="2022.01"
        title="EIMOS V1.0版本发布"
        imgUrl={n4}
      />{" "}
      <div className={styles["divider-bar"]}></div>
      <ForwardItem
        color="#40BC93"
        time="2022.03"
        title="杭州XX V1.0正式上线"
        imgUrl={n5}
      />{" "}
      <div className={styles["divider-bar"]}></div>
      <ReverseItem
        color="#FF7337"
        time="2022.06"
        title="金华XX项目正式上线 "
        imgUrl={n6}
      />{" "}
      <div className={styles["divider-bar"]}></div>
      <ForwardItem
        color="#6793EA"
        time="2023.06"
        title="杭州XX项目正式上线 "
        imgUrl={n7}
      />
    </div>
  );
}
