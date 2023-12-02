import styles from "./index.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { IMG_DETAIL_LIST } from "../../lib/const";
import { CapabilityComp } from "@/components";

const DetailComp = ({ position }: any) => {
  const content = IMG_DETAIL_LIST[position];

  const renderItem = (item: any) => {
    const { imgUrl, title, des, other } = item;
    return (
      <div className={styles["img-detail-wrapper"]}>
        <Image
          src={imgUrl}
          alt="聚焦企业核心业务线，实现线索到回款、收入到利润，关键经营指标可视，逐段逐层自动解析定位业务问题、生成任务令闭环管理"
          className={styles["detail-img"]}
        />
        <div className={styles["detail-wrapper"]}>
          {other && <div className={styles["other"]}>{other}</div>}
          <CapabilityComp list={des} title={title} />
        </div>
      </div>
    );
  };

  return (
    <div className={styles["detail-swiper-wrapper"]}>
      <Swiper
        className={styles["detail-swiper-content"]}
        modules={[A11y, Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={content.length > 1}
        navigation
        pagination={{ clickable: true }}
      >
        {(content || []).map((item: any, index: number) => {
          return (
            <SwiperSlide key={index} style={{ width: "100%", height: "100%" }}>
              {renderItem(item)}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default DetailComp;
