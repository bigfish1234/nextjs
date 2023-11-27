import Image from "next/image";
import styles from "../index.module.css";

const PartnerComp = ({ imgUrl, isMobile }: any) => {
  return (
    <div className={styles["partner-item"]}>
      <Image
        src={imgUrl}
        alt="合作伙伴"
        loading="lazy"
        className={styles["partner-img"]}
      />
      {!isMobile && (
        <div style={{ lineHeight: "28px", marginTop: 30 }}>
          深圳传世智慧科技有限公司是一家以变革和数字化为核心的企业全生命周期管理服务商，以最终经营增长为导向，集业务变革与数字化变革于一体，为客户提供业务变革与组织再造+数字转型与智能演进的系统性解决方案和产品服务，加速客户的业务数字化与数字产品化进程，实现客户的增长、提效、提能及高质量发展，成就客户成为世界级领先企业
        </div>
      )}
    </div>
  );
};

export default PartnerComp;
