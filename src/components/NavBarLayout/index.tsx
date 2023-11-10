import styles from "./index.module.css";
import { Imgs } from "@/images/mobileImg";
import Image from "next/image";

const NavBar = ({ children }: any) => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["wrapper-header"]}>
        <Image src={Imgs.expand} alt="expand" className={styles["expand"]} />
        <Image src={Imgs.logo} alt="logo" className={styles["logo"]} />
      </div>
      <div className="wrapper-center">{children}</div>
    </div>
  );
};

export default NavBar;
