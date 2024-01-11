import styles from "./index.module.css";
import Image from "next/image";
import bgimg from "/public/images/pc/home/diann.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";

import IBA_01 from "/public/images/pc/home/IBA_data01.png";
import IBA_02 from "/public/images/pc/home/IBA_data02.png";
import IBA_03 from "/public/images/pc/home/IBA_data03.png";

const ComputerSwiper = () => {
  return (
    <div className={styles["computer-wrapper"]}>
      <Image src={bgimg} alt="" width={437} height={367} />
      <Swiper
        className={styles["IBA-content"]}
        modules={[A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
      >
        {[IBA_01, IBA_02, IBA_03].map((imgUrl: any, index: number) => {
          return (
            <SwiperSlide key={index} style={{ width: "100%", height: "100%" }}>
              <Image src={imgUrl} alt="" key={index} width={400} height={225} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ComputerSwiper;
