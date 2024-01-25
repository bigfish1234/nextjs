import Image from "next/image";
import styles from "./index.module.css";
import getIcon from "/public/images/get-icon.png";
import { store } from "@/store";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";

const CapabilityComp = ({ list, title, position }: any) => {
  const state = store();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

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
                  paddingLeft: 0,
                  fontWeight: 600,
                  fontSize: 12,
                }}
              >
                {title}
              </span>
            )}
            <span
              style={{
                fontSize: 12,
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
      {position == "IBA" && (
        <div
          className="guide-btn"
          style={{
            position: "absolute",
            bottom: 15,
            fontSize: 14,
            width: 190,
          }}
          onClick={() => !isMobile && state.handleOpenChange(true)}
        >
          立即咨询
        </div>
      )}
    </div>
  );
};

export default CapabilityComp;
