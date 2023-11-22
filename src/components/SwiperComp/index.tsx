"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import { capabilityList_LTC } from "@/app/home-page/effects/const";
import { HoverComp } from "..";
import { DetailComp } from "@/app/home-page/components";
import { useDebounceFn } from "ahooks";

const SwiperComp = ({
  description,
  slideList,
  id,
  index,
  disable,
  isMobile,
  item = "LTC",
  handleIBAEvent,
  isShow,
}: any) => {
  // const [isDisplay, setIsDisplay] = useState(false);
  const slideItemRender = (slideList || []).map((imgUrl: any, ind: number) => (
    <>
      <Image
        src={imgUrl}
        alt="img"
        key={ind}
        quality={100}
        className={styles[`img-wrapper-${item}`]}
      />
      {/* {isDisplay && (
        <div className={styles.mask} id="mask">
          <HoverComp
            key={index}
            capabilityList={capabilityList_LTC[index]}
            position="LTC"
          />
        </div>
      )} */}
    </>
  ));
  const [content, setContent] = useState(slideItemRender);

  const onMouseEnter = useDebounceFn(
    (index: number) => {
      if (disable !== true && !isMobile)
        setContent([
          <>
            <div className={styles.mask} id="mask">
              <HoverComp
                key={index}
                capabilityList={capabilityList_LTC[index]}
                position="LTC"
              />
            </div>
          </>,
        ]);
    },
    {
      wait: 300,
    }
  );
  const onMouseLeave = useDebounceFn(
    () => {
      setContent(slideItemRender);
    },
    {
      wait: 300,
    }
  );

  return (
    <div
      className={styles[`wrapper-${item}`]}
      id="wrapper"
      onMouseLeave={() => {
        onMouseLeave.run();
        item == "IBA" && handleIBAEvent.run(1);
      }}
      onMouseEnter={() => {
        item == "IBA" && handleIBAEvent.run(0);
      }}
    >
      <div className={styles[`swiper-wrapper-${item}`]} id={id}>
        {isShow ? (
          <DetailComp position="IBA" />
        ) : (
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
        )}
      </div>
      <div
        className={`${styles["description"]} ${styles[`description-${item}`]}`}
        onMouseEnter={() => onMouseEnter.run(index)}
      >
        {description}
      </div>
    </div>
  );
};
export default SwiperComp;
