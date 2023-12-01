import Image from "next/image";
import styles from "./index.module.css";
import ltcImg from "/public/images/pc/home/ltc.png";
import ltcImg_mb from "/public/images/mobile/home/ltc.png";

const LtcImgWrapper = ({ isMobile, anchorClick }: any) => {
  const btnStyleChange = (type: string, value: number) => {
    const dom = document.getElementById(type);
    if (dom) {
      value
        ? (dom.style.boxShadow = "")
        : (dom.style.boxShadow = "0px 2px 16px 0px #E1E1E1");
    }
  };

  return (
    <div className="img-wrapper">
      <Image
        src={isMobile ? ltcImg_mb : ltcImg}
        alt="线索到回款(Lead to Cash)"
        loading="lazy"
        className={styles["ltc-img"]}
      />
      {!isMobile && (
        <>
          <span
            id="contract"
            className={`${styles["ltc-img-btn"]} ${styles["order-btn"]}`}
            onClick={() => anchorClick("order")}
            onMouseOver={() => btnStyleChange("contract", 0)}
            onMouseLeave={() => btnStyleChange("contract", 1)}
          >
            合同/订单360(Order360)
          </span>
          <span
            id="ismp"
            className={`${styles["ltc-img-btn"]} ${styles["ISMP-btn"]}`}
            onClick={() => anchorClick("ISMP")}
            onMouseOver={() => btnStyleChange("ismp", 0)}
            onMouseLeave={() => btnStyleChange("ismp", 1)}
          >
            智能销售管理(ISMP)
          </span>
          <span
            id="icm"
            className={`${styles["ltc-img-btn"]} ${styles["ICM-btn"]}`}
            onClick={() => anchorClick("ICM")}
            onMouseOver={() => btnStyleChange("icm", 0)}
            onMouseLeave={() => btnStyleChange("icm", 1)}
          >
            智能合同管理(ICM)
          </span>
          <span
            id="npi"
            className={`${styles["ltc-img-btn"]} ${styles["NPI-btn"]}`}
            onClick={() => anchorClick("NPI")}
            onMouseOver={() => btnStyleChange("npi", 0)}
            onMouseLeave={() => btnStyleChange("npi", 1)}
          >
            新产品导入(NPI)/产品配置报价(CPQ)
          </span>
        </>
      )}
    </div>
  );
};

export default LtcImgWrapper;
