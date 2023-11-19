import Image from "next/image";
import styles from "./index.module.css";
import logo from "/public/logo.png";
import NavgatorComp from "./effects/NavgatorComp";
import PageTitle from "./effects/PageTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SwiperHeader = ({ slideList, page }: any) => {
  return (
    <div className={styles.swiperHeader}>
      {/* 轮播图 */}
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
                alt="img"
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

      {/* logo */}
      <div className={styles["header"]}>
        <Image src={logo} alt="logo" className={styles["shuopan-logo"]} />
      </div>

      {/* 展开按钮和banner的导航栏 */}
      <NavgatorComp page={page} />

      <PageTitle page={page} />
    </div>
  );
};

export default SwiperHeader;
