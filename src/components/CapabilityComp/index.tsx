import Image from "next/image";
import styles from "./index.module.css";
import getIcon from "/public/get-icon.png";

const CapabilityComp = ({ list, title }: any) => {
  return (
    <div>
      <div className={styles["guide-slide-title"]}>{title}</div>
      {(list || []).map((item: any, index: number) => {
        const { title, detail } = item;
        return (
          <div key={index} style={{ marginBottom: 10 }}>
            <Image
              src={getIcon}
              alt="get"
              width={20}
              height={20}
              style={{ verticalAlign: "middle" }}
            />
            <span
              style={{
                paddingLeft: 5,
                fontWeight: 600,
                visibility: title ? "visible" : "hidden",
              }}
            >
              {title}：
            </span>
            <span
              style={{
                paddingLeft: title ? 25 : 5,
                lineHeight: "28px",
                display: title ? "block" : "inline",
                visibility: detail ? "visible" : "hidden",
              }}
            >
              {detail}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CapabilityComp;
