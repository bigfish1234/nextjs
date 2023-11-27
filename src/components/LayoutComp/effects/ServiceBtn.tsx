"use client";

import Image from "next/image";
import styles from "../index.module.css";
import { store } from "@/store";
import { ServiceForm } from "@/components";

import guidenceImg from "/public/advice-icon.png";
import closeIcon from "/public/close-icon.png";

const ServiceBtn = () => {
  const state = store();
  const clickToGuidence = () => {
    state.handleOpenChange(!state.isOpen);
  };
  return (
    <>
      <Image
        src={guidenceImg}
        alt="立即咨询"
        style={{ display: state.isMobile ? "none" : "block" }}
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
    </>
  );
};
export default ServiceBtn;
