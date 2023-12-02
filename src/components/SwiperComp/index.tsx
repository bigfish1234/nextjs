import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import { HoverComp } from "..";
import { DetailComp } from "@/components/IndexComponents";
import { capabilityList_LTC } from "@/lib/const";

const { useDebounceFn } = require("ahooks");

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
  const [isMaskShow, setIsMaskShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState<any>();

  const onMouseEnter = useDebounceFn(
    (index: number) => {
      setIsMaskShow(true);
      setActiveIndex(index);
    },
    {
      wait: 500,
    }
  );
  const onMouseLeave = useDebounceFn(
    () => {
      setIsMaskShow(false);
      setActiveIndex("");
    },
    {
      wait: 500,
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
        onMouseEnter.run(index);
        item == "IBA" && handleIBAEvent.run(0);
      }}
    >
      <div className={styles[`swiper-wrapper-${item}`]} id={id}>
        {isShow ? (
          <DetailComp position="IBA" />
        ) : (
          <>
            <Swiper
              className={styles["swiper-content"]}
              modules={[A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={slideList.length > 1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
            >
              {(slideList || []).map((imgUrl: any, ind: number) => {
                return (
                  <SwiperSlide
                    key={index}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Image
                      src={imgUrl}
                      alt={description}
                      key={ind}
                      quality={100}
                      className={styles[`img-wrapper-${item}`]}
                    />
                    <div
                      id="mask"
                      className={
                        isMaskShow && !isMobile && !disable
                          ? `${styles.mask} ${styles.enter}`
                          : styles.mask
                      }
                    >
                      <HoverComp
                        capabilityList={capabilityList_LTC[activeIndex]}
                        position="LTC"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        )}
      </div>
      <div
        className={`${styles["description"]} ${styles[`description-${item}`]}`}
      >
        {description}
      </div>
    </div>
  );
};
export default SwiperComp;
