import Image from "next/image";
import styles from "./index.module.css";
import getIcon from "/public/get-icon.png";

const ApplicationItem = ({ index, count, item, isMobile }: any) => {
  const { name, nameEn, des } = item || {};
  return (
    <div
      className={styles["app-item"]}
      style={{
        width: count > 3 ? (isMobile ? "100%" : "50%") : "100%",
        borderBottom: index + 1 == count ? 0 : "1px solid #d2d2d2",
      }}
    >
      <p className={styles["item-name"]}>{name}</p>
      <p className={styles["item-enname"]}>{nameEn}</p>
      {des.map((item: string, index: number) => {
        return (
          <div key={index} style={{ display: "flex", marginBottom: 16 }}>
            <div style={{ width: 16, marginRight: 8 }}>
              <Image
                src={getIcon}
                alt="get"
                loading="lazy"
                width={20}
                height={20}
                style={{ marginRight: 8, display: "inline-block" }}
              />
            </div>
            <div
              style={{ lineHeight: "26px", width: isMobile ? "100%" : "80%" }}
            >
              {item}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ApplicationItem;
