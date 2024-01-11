import styles from "./index.module.css";
import Image from "next/image";
import title_icon_left from "/public/images/icon-title-left.png";
import title_icon_right from "/public/images/icon-title-right.png";

const TabHeader = ({ h1, h2, id, showStyle, isShow = true }: any) => {
  return (
    <div className={`${styles.tabWrapper} ${showStyle}`} id={id}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <Image
          src={title_icon_left}
          alt="left"
          className={styles["icon-style"]}
        />
        <span className={styles["first-level-title"]}>{h1}</span>
        <Image
          src={title_icon_right}
          alt="left"
          className={styles["icon-style"]}
        />
      </div>
      <h3 className={styles["second-level-title"]}>{h2}</h3>
      {isShow && <div className={styles.divider}></div>}
    </div>
  );
};

export default TabHeader;
