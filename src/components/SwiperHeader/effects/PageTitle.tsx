import styles from "../index.module.css";
import { store } from "@/store";
import { MOBILE_REG } from "@/utils/isMobileDevice";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PageTitle = ({ page }: any) => {
  const state = store();
  const path = usePathname() as string;
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

  const firstTitleStyle = isMobile
    ? `${styles["first-title"]} ${styles["first-title_mb"]}`
    : styles["first-title"];
  return (
    <div className={styles["page-title"]}>
      {page == "join" ? (
        <div style={{ color: "#fff" }}>
          <p className={firstTitleStyle}>加入我们</p>
          <p className={styles["second-title"]}>
            期待你的加入，我们在硕磐等你！
          </p>
        </div>
      ) : page == "about" ? (
        <>
          <p className={firstTitleStyle}>硕磐智能</p>
          {!isMobile && (
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
          )}
        </>
      ) : page == "info" ? (
        <>
          <p className={firstTitleStyle} style={{ fontWeight: 600, top: 140 }}>
            信息中心
          </p>
        </>
      ) : (
        <>
          <p className={styles["first-title"]}>数据驱动+AI使能</p>
          <p className={styles["second-title"]}>
            助力企业{" "}
            <span className={styles["active-title"]}>增收、增利、少增人</span>
          </p>
        </>
      )}
      <div
        className="guide-btn"
        style={{
          width: isMobile ? 120 : 190,
          marginTop: 15,
          display: path == "/" ? "block" : "none",
        }}
        onClick={() => {
          if (!isMobile) {
            state.handleOpenChange(true);
          } else {
            router.push("/contact-us");
          }
        }}
      >
        获取演示
      </div>
    </div>
  );
};

export default PageTitle;
