import styles from "./index.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import HoverComp from "../HoverComp";
import { capabilityList_LTC } from "@/app/home-page/effects/const";

const SwiperComp = ({
  description,
  slideList,
  id,
  index,
  disable,
  isMobile,
}: any) => {
  const slideItemRender = (slideList || []).map((imgUrl: any, ind: number) => (
    <Image
      src={imgUrl}
      alt="img"
      key={ind}
      style={{ width: "100%", height: "100%" }}
    />
  ));
  const [content, setContent] = useState(slideItemRender);

  const onMouseEnter = (index: number) => {
    if (disable !== true && !isMobile)
      setContent([
        <HoverComp
          key={index}
          capabilityList={capabilityList_LTC[index]}
          position="LTC"
        />,
      ]);
  };
  const onMouseLeave = () => setContent(slideItemRender);

  return (
    <div className={styles["wrapper"]} id="wrapper" onMouseLeave={onMouseLeave}>
      <div className={styles["swiper-wrapper"]} id={id}>
        <Swiper
          className={styles["swiper-content"]}
          modules={[A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={content.length > 1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {(content || []).map((item: any, index: number) => {
            return (
              <SwiperSlide
                key={index}
                style={{ width: "100%", height: "100%" }}
              >
                {item}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div
        className={styles.description}
        onMouseEnter={() => onMouseEnter(index)}
      >
        {description}
      </div>
    </div>
  );
};
export default SwiperComp;
