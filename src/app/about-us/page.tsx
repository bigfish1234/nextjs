import TabHeader from "@/components/TabHearder";
import styles from "./index.module.css";
import Image from "next/image";
import founderImg from "./imgs/founder.png";
import originatorImg from "./imgs/originator.png";

const AboutUs = () => {
  return (
    <div className={styles["about-us-wrapper"]}>
      <TabHeader h1="将经营管理理念与模型抽象落地的架构团队" />
      <div className={styles["about-us-content"]}>
        <div className={styles["founder-img"]}>
          <Image
            src={founderImg}
            alt="founder"
            style={{ width: "100%", height: "50%" }}
          />
          <Image
            src={originatorImg}
            alt="originator"
            style={{ width: "100%", height: "45%" }}
          />
        </div>
        <div className={styles["tenure-info"]}>
          <div>前华为副总裁</div>
          <div>前大华CEO</div>
          <div>华为/思科</div>
        </div>
        <div className={styles["info-content"]}></div>
        <div className={styles["method"]}></div>
        <div className={styles["future"]}></div>
      </div>
    </div>
  );
};

export default AboutUs;
