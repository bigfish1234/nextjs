"use client";

import Image from "next/image";
import styles from "../index.module.css";
import { store } from "@/store";
import { ServiceForm } from "@/components";
import { isMobileDevice } from "@/utils/isMobileDevice";

import guidenceImg from "/public/advice-icon.png";
import closeIcon from "/public/close-icon.png";

const ServiceBtn = () => {
  const isMobile = isMobileDevice();
  const state = store();
  const clickToGuidence = () => {
    state.handleOpenChange(!state.isOpen);
  };
  return (
    <>
      <Image
        src={guidenceImg}
        alt="gudience"
        style={{ display: isMobile ? "none" : "block" }}
        className={styles["guide-service"]}
        onClick={clickToGuidence}
      />

      {state.isOpen ? (
        <div className={styles["service-form"]}>
          <div style={{ position: "relative" }}>
            <Image
              src={closeIcon}
              alt="close"
              width={16}
              height={16}
              style={{ position: "absolute", right: 0, cursor: "pointer" }}
              onClick={() => state.handleOpenChange(false)}
            />
          </div>
          <ServiceForm />
        </div>
      ) : null}
    </>
  );
};
export default ServiceBtn;
