import Image from "next/image";
import styles from "./index.module.css";
import NavgatorComp from "./effects/NavgatorComp";
import PageTitle from "./effects/PageTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SwiperHeader = ({ slideList, page }: any) => {
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
          const renderSlide = () => {
            return (
              <Image
                priority={true}
                src={imgUrl}
                alt="数据驱动+AI使能，助力企业增收、增利、少增人"
                className={styles["swiper-content"]}
              />
            );
          };
          return (
            <SwiperSlide key={index} className={styles["swiper-content"]}>
              {renderSlide()}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <NavgatorComp page={page} />
      <PageTitle page={page} />
    </div>
  );
};

export default SwiperHeader;
