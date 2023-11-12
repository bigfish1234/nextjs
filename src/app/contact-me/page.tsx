import Image from "next/image";
import styles from "./index.module.css";
import { Imgs } from "@/images/mobileImg";
import NavBarLayout from "@/components/NavBarLayout";

const ContactMe = () => {
  return (
    <NavBarLayout>
      <div style={{ margin: "24px 0", fontSize: 20, fontWeight: 600 }}>
        咨询服务
      </div>
      <div className={styles["submit-btn"]}>提交</div>
    </NavBarLayout>
  );
};

export default ContactMe;
