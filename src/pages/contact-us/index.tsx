import { LayoutWrapper, ServiceForm } from "@/components";
import Image from "next/image";
import Metadata from "next/head";
import { store } from "@/store";
import styles from "./index.module.css";
import expand_icon from "/public/images/expand-icon.png";
import logo from "/public/images/logo.png";
import dynamic from "next/dynamic";

const MyServiceForm = dynamic(() => import("@/components/ServiceForm"), {
  ssr: false,
});

const ContactMe = () => {
  const state = store();
  return (
    <LayoutWrapper>
      <Metadata>
        <title>联系我们</title>
      </Metadata>
      <div className={styles["wrapper"]}>
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
        <MyServiceForm />
      </div>
    </LayoutWrapper>
  );
};

export default ContactMe;
