import Image from "next/image";
import styles from "./index.module.css";
import getIcon from "/public/get-icon.png";
import { store } from "@/store";

const CapabilityComp = ({ list, title }: any) => {
  const state = store();
  return (
    <div>
      <div className={styles["guide-slide-title"]}>{title}</div>
      {(list || []).map((item: any, index: number) => {
        const { title, detail } = item;
        return (
          <div key={index} style={{ marginBottom: 5 }}>
            <Image
              src={getIcon}
              alt="get"
              width={20}
              height={20}
              style={{ verticalAlign: "middle" }}
            />
            {title && (
              <span
                style={{
                  paddingLeft: 5,
                  fontWeight: 600,
                }}
              >
                {title}：
              </span>
            )}
            <span
              style={{
                paddingLeft: 5,
                lineHeight: "22px",
                visibility: detail ? "visible" : "hidden",
              }}
            >
              {detail}
            </span>
          </div>
        );
      })}
      <div
        className="guide-btn"
        style={{ position: "absolute", bottom: 20, fontSize: 14 }}
        onClick={() => !state.isMobile && state.handleOpenChange(true)}
      >
        立即咨询
      </div>
    </div>
  );
};

export default CapabilityComp;
