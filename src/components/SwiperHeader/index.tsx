"use client";

import Image from "next/image";
import styles from "./index.module.css";
import logo from "@/images/logo.png";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { Imgs } from "@/images/mobileImg";
import useHomeEvent from "@/app/home-page/useHomeEvent";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { isMobileDevice } from "@/utils/isMobileDevice";

const SwiperHeader = ({ slideList, page, setIsExpand, isExpand }: any) => {
  const { handleClick } = useHomeEvent();
  const [path, setPath] = useState("home-page");

  const isMobile = isMobileDevice();

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
          // router.push("/home-page");
          window.location.href = "/home-page";
        }}
      />

      {isMobile ? (
        <Image
          src={Imgs.expand}
          alt="expand"
          className={styles["expand-icon"]}
          onClick={() => setIsExpand(!isExpand)}
        />
      ) : (
        <div
          className={styles.navgator}
          style={{ color: page == "join" ? "#fff" : "black" }}
        >
          <Link
            prefetch
            href="/home-page"
            style={{ color: path == "home-page" ? "#F96F25" : "black" }}
            onClick={() => {
              // router.push("/home-page");
              // window.location.href = "/home-page";
              setPath("home-page");
            }}
          >
            EIMOS
          </Link>
          <Link
            prefetch
            href="/info-center"
            style={{ color: path == "info-center" ? "#F96F25" : "black" }}
            onClick={() => {
              // window.location.href = "/info-center";
              setPath("info-center");
            }}
          >
            信息中心
          </Link>
          <Link
            prefetch
            href="/about-us"
            style={{ color: path == "about-us" ? "#F96F25" : "black" }}
            onClick={() => setPath("about-us")}
          >
            关于我们
          </Link>
          <Link
            prefetch
            href="/join-us"
            style={{ color: path == "join-us" ? "#F96F25" : "inherit" }}
            onClick={() => setPath("join-us")}
          >
            加入我们
          </Link>
        </div>
      )}

      {/* <div className={styles.obtain}>
        <a>获取演示</a>
      </div> */}
    </div>
  );
};

export default SwiperHeader;
