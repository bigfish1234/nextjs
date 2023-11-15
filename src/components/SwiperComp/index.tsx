import styles from "./index.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import getIcon from "@/images/gou@2x.png";
import "swiper/css";
import { useState } from "react";

const SwiperComp = ({ description, slideList, index }: any) => {
  const slideItemRender = (slideList || []).map((imgUrl: any, ind: number) => (
    <Image
      src={imgUrl}
      alt="img"
      key={ind}
      style={{ width: "100%", height: "100%" }}
    />
  ));
  const [content, setContent] = useState(slideItemRender);
  const renderDetail = () => {
    return (
      <div className={styles["guide-slide-wrapper"]}>
        <div className={styles["guide-slide-title"]}>核心能力</div>
        <div>
          <Image
            src={getIcon}
            alt="get"
            width={20}
            height={20}
            style={{ verticalAlign: "bottom" }}
          />
          <span style={{ paddingLeft: 5 }}>需求优先级排序：</span>
          <p style={{ paddingLeft: 25, lineHeight: "22px" }}>
            综合客户价值、产品价值、项目规模、需求紧急度等因素，辅助设计人员对需求进行优先级排序，优质资源匹配优质客户；
          </p>
        </div>
        <div className={styles["guide-btn"]}>立即咨询</div>
      </div>
    );
  };

  const onMouseEnter = (index: number) => {
    setContent([renderDetail()]);
  };

  const onMouseLeave = (index: number) => {
    setContent(slideItemRender);
  };

  return (
    <div
      className={styles["wrapper"]}
      id="wrapper"
      onMouseLeave={() => onMouseLeave(index)}
    >
      <div className={styles["swiper-wrapper"]} id="swiper">
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
