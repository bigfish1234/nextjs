import Image from "next/image";
import styles from "./index.module.css";
import { LayoutComp, TabHeader } from "@/components";
import { KapComp, PartnerComp } from "../../components/CorporateComponents";
import founderImg from "/public/images/pc/about/like.png";
import ttWisdom from "/public/images/ttwisdom.png";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";
import Metadata from "next/head";
import spzn_banner from "/public/images/pc/about/about-banner.png";
import spzn_banner_mb from "/public/images/mobile/about/sp.png";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  const aboutSlideList = {
    pc: [spzn_banner],
    mb: [spzn_banner_mb],
  };

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

  return (
    <div>
      <Metadata>
        <title>关于我们</title>
      </Metadata>
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
            <span className={styles["background-word"]}>数据平台</span>和
            <span className={styles["background-word"]}>解决方案</span>
            的新型高科技企业。
          </div>
        )}
        <div className={`${"wrapper-center"} ${styles["about-us-wrapper"]}`}>
          <TabHeader h1="将经营管理理念与模型抽象落地的架构团队" />
          <div className="img-wrapper">
            <Image
              src={founderImg}
              alt="将经营管理理念与模型抽象落地的架构团队"
              className={styles["founder"]}
            />
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
    </div>
  );
};

export default AboutUs;
