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
