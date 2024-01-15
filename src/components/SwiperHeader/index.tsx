import Image from "next/image";
import styles from "./index.module.css";
import NavgatorComp from "./effects/NavgatorComp";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";
import { store } from "@/store";

const SwiperHeader = ({ slideList, page }: any) => {
  const path = usePathname();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const state = store();

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
    <div
      className={
        path == "/" ? styles["swiperHeader-home"] : styles["swiperHeader"]
      }
    >
      <Swiper
        className={styles["swiper-content"]}
        modules={[A11y, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={slideList.length > 1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
      >
        {(slideList || []).map((imgUrl: any, index: number) => {
          const renderTitle = (index: number) => {
            return (
              <div
                className={
                  path == "/" ? styles["page-title-home"] : styles["page-title"]
                }
              >
                {path == "/" ? (
                  <div>
                    {index == 0 ? (
                      <>
                        <p
                          className={styles["first-title-home"]}
                          style={{
                            padding: isMobile ? 0 : "20px 0 0",
                          }}
                        >
                          硕磐EIMOS
                        </p>
                        <p
                          className={styles["second-title-home"]}
                          style={{ color: "#fff", letterSpacing: 2 }}
                        >
                          您的企业级智慧管家
                        </p>
                        <div
                          className={styles["homepage-btn"]}
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
                      </>
                    ) : null}
                  </div>
                ) : path == "/information-center" ? (
                  <p
                    className={firstTitleStyle}
                    style={{ fontWeight: 600, letterSpacing: 2 }}
                  >
                    信息中心
                  </p>
                ) : path == "/corporate-information" ? (
                  <div style={{ width: 720 }}>
                    <p className={firstTitleStyle} style={{ letterSpacing: 2 }}>
                      硕磐智能
                    </p>
                    <div className={styles["spzn-introduce"]}>
                      致力于构建新一代云原生数据分析平台和企业管理系统，助力制造业企业
                      <span className={styles["background-word"]}>数字化</span>
                      转型 ，并通过打造
                      <span className={styles["background-word"]}>智能化</span>
                      产业互联网，为产业数字化运营和企业数字化管理提供
                      <span className={styles["background-word"]}>
                        数据平台
                      </span>{" "}
                      和
                      <span className={styles["background-word"]}>
                        解决方案
                      </span>
                      的新型高科技企业。
                    </div>
                  </div>
                ) : (
                  <div style={{ color: "#fff", letterSpacing: 2 }}>
                    <p className={firstTitleStyle}>加入我们</p>
                    <p className={styles["second-title"]}>
                      期待您的加入，我们在硕磐等您！
                    </p>
                  </div>
                )}
              </div>
            );
          };
          const renderSlide = () => {
            return (
              <div className={styles["swiper-content"]}>
                <Image
                  priority={true}
                  src={imgUrl}
                  alt="硕磐EIMOS，您的企业级智慧管家"
                  className={styles["swiper-content"]}
                />
              </div>
            );
          };
          return (
            <SwiperSlide key={index} className={styles["swiper-content"]}>
              {renderSlide()}
              {renderTitle(index)}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <NavgatorComp page={page} />
    </div>
  );
};

export default SwiperHeader;
