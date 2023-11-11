import SwiperSlideComp from "../SwiperSlideComp";
import styles from "./index.module.css";

const SwiperComp = ({ description, slideList }: any) => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["swiper-wrapper"]}>
        <SwiperSlideComp slideList={slideList} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
export default SwiperComp;
