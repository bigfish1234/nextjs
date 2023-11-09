import TabHeader from "@/components/TabHearder";
import styles from "./index.module.css";
import Image from "next/image";
import founderImg from "./imgs/founder.png";
import KapComp from "./components/KapComp";
import PartnerComp from "./components/PartnerComp";
import LayoutComp from "@/components/LayoutComp";
import spznImg from "./imgs/spzn.png";

const AboutUs = () => {
  return (
    <>
      <LayoutComp imgUrl={spznImg}>
        <div className={styles["about-us-wrapper"]}>
          <TabHeader h1="将经营管理理念与模型抽象落地的架构团队" />
          <Image src={founderImg} alt="like" className={styles["founder"]} />
        </div>
        <div className={styles["history"]}>
          <TabHeader h1="发展历程" />
          <KapComp />
        </div>
        <div className={styles["partner"]}>
          <TabHeader h1="合作伙伴" />
          <PartnerComp />
        </div>
      </LayoutComp>
    </>
  );
};

export default AboutUs;
