import Image from "next/image";
import FooterComp from "../FooterComp";
import SwiperHeader from "../SwiperHeader";
import guidenceImg from "@/images/eimos/guidance.png";
import styles from "./index.module.css";

const LayoutComp = ({ imgUrl, children }: any) => {
  return (
    <div>
      {/* 轮播图 */}
      <SwiperHeader imgUrl={imgUrl} />
      <slot>{children}</slot>
      {/* footer */}
      <FooterComp />
      {/* 咨询 */}
      <Image
        src={guidenceImg}
        alt="gudience"
        width={38}
        height={38}
        className={styles["guide-service"]}
      />
    </div>
  );
};

export default LayoutComp;
