"use client";

import Image from "next/image";
import styles from "./index.module.css";
import logo from "@/images/logo.png";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { Imgs } from "@/images/mobileImg";
import useHomeEvent from "@/app/home-page/useHomeEvent";
// import SwiperSlideComp from "../SwiperSlideComp";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import { isMobileDevice } from "@/utils/isMobileDevice";

const SwiperHeader = ({ slideList, page }: any) => {
  const { handleClick } = useHomeEvent();
  // const isMobile = isMobileDevice();

  return (
    <div className={styles.swiperHeader}>
      <Swiper
        className={styles["swiper-content"]}
        modules={[A11y, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {(slideList || []).map((imgUrl: any, index: number) => {
          return (
            <SwiperSlide key={index} className={styles["swiper-content"]}>
              <Image
                src={imgUrl}
                alt="img"
                className={styles["swiper-content"]}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Image
        src={logo}
        alt="logo"
        className={styles["shuopan-logo"]}
        onClick={() => {
          window.location.href = "/home-page";
          // console.log(isMobile);
        }}
      />

      {isMobile ? (
        <Image
          src={Imgs.expand}
          alt="expand"
          className={styles["expand-icon"]}
        />
      ) : (
        <div
          className={styles.navgator}
          style={{ color: page == "join" ? "#fff" : "black" }}
        >
          <Link href="/home-page">EIMOS</Link>
          <Link href="/info-center">信息中心</Link>
          <Link href="/about-us">关于我们</Link>
          <Link href="/join-us">加入我们</Link>
        </div>
      )}

      {/* <div className={styles.obtain}>
        <a>获取演示</a>
      </div> */}
    </div>
  );
};

export default SwiperHeader;
