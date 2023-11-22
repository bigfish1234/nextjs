"use client";
import { PageNavigator, ServiceForm } from "@/components";
import Image from "next/image";
import { store } from "@/store";
import styles from "./index.module.css";
import expand_icon from "/public/expand-icon.png";
import logo from "/public/logo.png";

const ContactMe = () => {
  const state = store();
  return (
    <div className={styles["wrapper"]}>
      {state.isExpand && <PageNavigator />}
      <div className={styles["wrapper-header"]}>
        <Image
          src={expand_icon}
          alt="expand"
          id="expand"
          className={styles["expand"]}
          onClick={() => {
            state.handleExpandChange(!state.isExpand);
            const dom = document.getElementById("expand");
            if (dom) {
              state.isExpand
                ? (dom.style.rotate = "0deg")
                : (dom.style.rotate = "90deg");
            }
          }}
        />
        <Image src={logo} alt="logo" className={styles["logo"]} />
      </div>
      <ServiceForm />
    </div>
  );
};

export default ContactMe;
