import Image from "next/image";
import { store } from "@/store";
import styles from "./index.module.css";

import expand_icon from "/public/expand-icon.png";
import logo from "/public/logo.png";
import { PageNavigator } from "..";

const NavBarLayout = ({ children }: any) => {
  const state = store();
  return (
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
      <div className="wrapper-center">{children}</div>
      {state.isExpand && <PageNavigator />}
    </div>
  );
};

export default NavBarLayout;
