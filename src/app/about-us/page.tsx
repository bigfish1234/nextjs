"use client";
import TabHeader from "@/components/TabHearder";
import styles from "./index.module.css";
import Image from "next/image";
import founderImg from "./imgs/founder.png";
import KapComp from "./components/KapComp";
import PartnerComp from "./components/PartnerComp";
import LayoutComp from "@/components/LayoutComp";
import spznImg from "./imgs/spzn.png";
import { Imgs } from "@/images/mobileImg";
import { isMobileDevice } from "@/utils/isMobileDevice";

const AboutUs = () => {
  const isMobile = isMobileDevice();
  const aboutSlideList = {
    pc: [spznImg],
    mb: [Imgs.spzn],
  };
  return (
    <main>
      <LayoutComp
        slideList={isMobile ? aboutSlideList.mb : aboutSlideList.pc}
        page="about"
      >
        {isMobile && (
          <div className={styles["spzn-introduce"]}>
            致力于构建新一代云原生数据分析平台和企业管理系统，助力制造业企业
            <span className={styles["background-word"]}>数字化</span>
            转型 ，并通过打造
            <span className={styles["background-word"]}>智能化</span>
            产业互联网，为产业数字化运营和企业数字化管理提供
            <span className={styles["background-word"]}>数据平台</span> 和
            <span className={styles["background-word"]}>解决方案</span>
            的新型高科技企业。
          </div>
        )}
        <div className={`${"wrapper-center"} ${styles["about-us-wrapper"]}`}>
          <TabHeader h1="将经营管理理念与模型抽象落地的架构团队" />
          <Image src={founderImg} alt="like" className={styles["founder"]} />
        </div>
        <div className={styles["history"]}>
          <TabHeader h1="发展历程" />
          {/* <KapComp /> */}
        </div>
        <div className={styles["partner"]}>
          <TabHeader h1="合作伙伴" />
          {/* <PartnerComp /> */}
        </div>
      </LayoutComp>
    </main>
  );
};

export default AboutUs;
