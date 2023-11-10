import Image from "next/image";
import FooterComp from "../FooterComp";
import SwiperHeader from "../SwiperHeader";
import guidenceImg from "@/images/eimos/guidance.png";
import styles from "./index.module.css";
import { isMobile } from "react-device-detect";
import Link from "next/link";

const LayoutComp = ({ imgUrl, isJoin, children }: any) => {
  return (
    <div>
      {/* 轮播图 */}
      <SwiperHeader imgUrl={imgUrl} isJoin={isJoin} />
      <slot>{children}</slot>
      {/* footer */}
      {/* {!isMobile ? (
        <div className={`${"wrapper-center"} ${styles["mobile-footer"]}`}>
          <div className={styles["contact-us"]}>联系我们</div>
          <div className={styles["copyright"]}>
            <Image src={emblemImg} alt="emblem" width={14} height={14} />
            <span style={{ padding: 5 }}>
              版权所有 2021-2023 杭州硕磐智能科技有限公司 浙ICP备23400000203号-1
            </span>
          </div>
        </div>
      ) : (
        <FooterComp />
      )} */}
      <FooterComp />
      {/* 咨询 */}
      <Image
        src={guidenceImg}
        alt="gudience"
        width={38}
        height={38}
        className={styles["guide-service"]}
      />

      {/* 侧边栏 */}
      {isMobile && (
        <div className={styles["mobile-sidebar"]}>
          <div className={styles["mobile-sidebar-content"]}>
            <Link href="/home-page">EIMOS</Link>
            <Link href="/info-center">信息中心</Link>
            <Link href="/about-us">关于我们</Link>
            <Link href="/join-us">加入我们</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutComp;
