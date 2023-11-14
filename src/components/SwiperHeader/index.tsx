"use client";

import { useState } from "react";
import { isMobileDevice } from "@/utils/isMobileDevice";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import logo from "@/images/logo.png";
import { Imgs } from "@/images/mobileImg";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { store } from "@/store";

const SwiperHeader = ({ slideList, page, setIsExpand, isExpand }: any) => {
  const isMobile = isMobileDevice();
  const state = store();

  return (
    <div className={styles.swiperHeader}>
      <Swiper
        className={styles["swiper-content"]}
        modules={[A11y, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={slideList.length > 1}
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
                priority={true}
                src={imgUrl}
                alt="img"
                className={styles["swiper-content"]}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className={styles["header"]}>
        <Image
          src={logo}
          alt="logo"
          className={styles["shuopan-logo"]}
          onClick={() => {
            window.location.href = "/home-page";
          }}
        />

        {isMobile ? (
          <Image
            src={Imgs.expand}
            alt="expand"
            id="expand"
            className={styles["expand-icon"]}
            style={{ position: isExpand ? "fixed" : "absolute" }}
            onClick={() => {
              setIsExpand(!isExpand);
              const dom = document.getElementById("expand");
              if (dom) {
                isExpand
                  ? (dom.style.rotate = "0deg")
                  : (dom.style.rotate = "90deg");
              }
            }}
          />
        ) : (
          <div
            className={styles.navgator}
            style={{ color: page == "join" ? "#fff" : "black" }}
          >
            <Link
              prefetch
              href="/home-page"
              style={{
                color:
                  state.page == "eimos"
                    ? "#F96F25"
                    : state.page == "join"
                    ? "white"
                    : "black",
              }}
              onClick={() => state.onPageChange("eimos")}
            >
              EIMOS
            </Link>
            <Link
              prefetch
              href="/info-center"
              style={{
                color:
                  state.page == "info"
                    ? "#F96F25"
                    : state.page == "join"
                    ? "white"
                    : "black",
              }}
              onClick={() => state.onPageChange("info")}
            >
              信息中心
            </Link>
            <Link
              prefetch
              href="/about-us"
              style={{
                color:
                  state.page == "about"
                    ? "#F96F25"
                    : state.page == "join"
                    ? "white"
                    : "black",
              }}
              onClick={() => state.onPageChange("about")}
            >
              关于我们
            </Link>
            <Link
              prefetch
              href="/join-us"
              style={{ color: state.page == "join" ? "#F96F25" : "black" }}
              onClick={() => state.onPageChange("join")}
            >
              加入我们
            </Link>
          </div>
        )}
      </div>

      {/* <div className={styles.obtain}>
        <a>获取演示</a>
      </div> */}
    </div>
  );
};

export default SwiperHeader;
