"use client";

import Image from "next/image";
import FooterComp from "../FooterComp";
import SwiperHeader from "../SwiperHeader";
import guidenceImg from "@/images/eimos/guidance.png";
import styles from "./index.module.css";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import { useState } from "react";

const LayoutComp = ({ page, slideList, children }: any) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div>
      {/* 轮播图 */}
      <SwiperHeader
        slideList={slideList}
        page={page}
        setIsExpand={setIsExpand}
        isExpand={isExpand}
      />
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
      {isMobile && isExpand && (
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
