import Image from "next/image";
import styles from "../index.module.css";
import { store } from "@/store";
import { ServiceForm } from "@/components";

import guidenceImg from "/public/images/advice-icon.png";
import closeIcon from "/public/images/close-icon.png";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";

const ServiceBtn = () => {
  const state = store();
  const clickToGuidence = () => {
    state.handleOpenChange(!state.isOpen);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

  return (
    <div>
      <Image
        src={guidenceImg}
        alt="立即咨询"
        style={{
          visibility: !isMobile && !state.isOpen ? "visible" : "hidden",
        }}
        className={styles["guide-service"]}
        onClick={clickToGuidence}
      />

      {state.isOpen ? (
        <div className={styles["service-form"]}>
          <div
            style={{
              width: "100%",
              height: 46,
              position: "sticky",
              top: 0,
              backgroundColor: "#fff",
              zIndex: 99,
              padding: 15,
              borderBottom: "1px solid #f5f5f5",
            }}
          >
            <span style={{ fontSize: 20 }}>咨询服务</span>
            <Image
              src={closeIcon}
              alt="close"
              width={16}
              height={16}
              style={{ position: "absolute", right: 15, cursor: "pointer" }}
              onClick={() => state.handleOpenChange(false)}
            />
          </div>
          <ServiceForm />
        </div>
      ) : null}
    </div>
  );
};
export default ServiceBtn;
