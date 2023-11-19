"use client";

import Image from "next/image";
import styles from "./index.module.css";
import { LayoutComp, TabHeader } from "@/components";
import { KapComp, PartnerComp } from "./components";
import useAboutEvent from "./effects/useAboutEvent";

import founderImg from "/public/pc/about/like.png";
import ttWisdom from "/public/ttwisdom.png";

const AboutUs = () => {
  const { isMobile, aboutSlideList } = useAboutEvent();

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
          <div className="img-wrapper">
            <Image src={founderImg} alt="like" className={styles["founder"]} />
          </div>
        </div>
        <div className={styles["history"]}>
          <TabHeader h1="发展历程" />
          <KapComp />
        </div>
        <div className={styles["partner-wrapper"]}>
          <TabHeader h1="合作伙伴" />
          <PartnerComp imgUrl={ttWisdom} isMobile={isMobile} />
        </div>
      </LayoutComp>
    </main>
  );
};

export default AboutUs;
