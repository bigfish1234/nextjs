"use client";
import { isMobileDevice } from "@/utils/isMobileDevice";
import styles from "../index.module.css";

const PageTitle = ({ page }: any) => {
  const isMobile = isMobileDevice();
  return (
    <div style={{ display: isMobile ? "none" : "block" }}>
      <div className={styles["page-title"]}>
        {page == "join" ? (
          <div style={{ color: "#fff" }}>
            <p className={styles["first-title"]}>加入我们</p>
            <p className={styles["second-title"]}>
              期待你的加入，我们在硕磐等你！
            </p>
          </div>
        ) : page == "about" ? (
          <>
            <p className={styles["first-title"]}>硕磐智能</p>
            <div className={styles["spzn-introduce"]}>
              致力于构建新一代云原生数据分析平台和企业管理系统，助力制造业企业
              <span className={styles["background-word"]}>数字化</span>
              转型 ，并通过打造
              <span className={styles["background-word"]}>智能化</span>
              产业互联网，为产业数字化运营和企业数字化管理提供
              <span className={styles["background-word"]}>数据平台</span> 和
              <span className={styles["background-word"]}>解决方案</span>
              的新型高科技企业。
            </div>
          </>
        ) : page == "info" ? (
          <>
            <p
              className={styles["first-title"]}
              style={{ fontWeight: 600, top: 140 }}
            >
              信息中心
            </p>
          </>
        ) : (
          <>
            <p className={styles["first-title"]}>数据驱动+AI使能</p>
            <p className={styles["second-title"]}>
              助力企业{" "}
              <span style={{ color: "#f96f25", fontSize: 46, fontWeight: 600 }}>
                增收、增利、少增人
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PageTitle;
