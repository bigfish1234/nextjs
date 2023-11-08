import Image from "next/image";
import styles from "./index.module.css";

const SwiperComp = ({ description, imgUrl }: any) => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["swiper-wrapper"]}>
        <Image
          src={imgUrl}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
export default SwiperComp;
