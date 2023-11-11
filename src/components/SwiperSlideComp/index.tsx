"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import styles from "./index.module.css";

import "swiper/css";

const SwiperSlideComp = ({ slideList }: any) => {
  return (
    <Swiper
      className={styles["swiper-content"]}
      modules={[A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {(slideList || []).map((imgUrl: any, index: number) => {
        return (
          <SwiperSlide key={index} style={{ width: "100%", height: "100%" }}>
            <Image
              src={imgUrl}
              alt="img"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperSlideComp;
