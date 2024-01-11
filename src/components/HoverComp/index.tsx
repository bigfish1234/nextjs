import { CapabilityComp } from "..";
import styles from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const HoverComp = ({ capabilityList, position, detailImgs }: any) => {
  return (
    <div
      className={`${styles["common-wrapper"]} ${
        styles[`${position}-guide-slide-wrapper`]
      }`}
    >
      <div className={styles[`${position}-content-img`]}>
        <Swiper
          className={styles["swiper-content"]}
          modules={[A11y, Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={detailImgs?.length > 1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
        >
          {(detailImgs || []).map((imgUrl: any, index: number) => {
            return (
              <SwiperSlide
                key={index}
                className={styles[`${position}-imgsize`]}
              >
                <Image
                  src={imgUrl}
                  alt=""
                  quality={100}
                  style={{ width: "100%", height: "100%" }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={styles[`${position}-content-des`]}>
        <div className={styles["guide-slide-title"]}>核心能力</div>
        <CapabilityComp list={capabilityList} />
      </div>
    </div>
  );
};

export default HoverComp;
