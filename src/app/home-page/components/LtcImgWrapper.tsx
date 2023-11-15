"use client";

import Image from "next/image";
import styles from "./index.module.css";
import ltcImg from "@/images/ltc.png";
import { Imgs } from "@/images/mobileImg";

const LtcImgWrapper = ({ isMobile, anchorClick }: any) => {
  return (
    <div className="img-wrapper">
      <Image
        src={isMobile ? Imgs.ltc : ltcImg}
        alt="ltcImg"
        className={styles["ltc-img"]}
      />
      {!isMobile && (
        <>
          <span
            className={`${styles["ltc-img-btn"]} ${styles["order-btn"]}`}
            onClick={() => anchorClick("order")}
          >
            合同/订单360(Order360)
          </span>
          <span
            className={`${styles["ltc-img-btn"]} ${styles["ISMP-btn"]}`}
            onClick={() => anchorClick("ISMP")}
          >
            智能销售管理(ISMP)
          </span>
          <span
            className={`${styles["ltc-img-btn"]} ${styles["ICM-btn"]}`}
            onClick={() => anchorClick("ICM")}
          >
            智能合同管理(ICM)
          </span>
          <span
            className={`${styles["ltc-img-btn"]} ${styles["NPI-btn"]}`}
            onClick={() => anchorClick("NPI")}
          >
            新产品导入(NPI)/产品配置报价(CPQ)
          </span>
        </>
      )}
    </div>
  );
};

export default LtcImgWrapper;
