import Image from "next/image";
import styles from "./index.module.css";
import emblemLogo from "@/images/guoh@2x.png";
import aboutLogo from "@/images/about.png";
import contactLogo from "@/images/contact.png";
import sourceLogo from "@/images/source.png";
import productLogo from "@/images/product.png";
import emblemImg from "@/images/guoh@2x.png";
import Link from "next/link";
import { store } from "@/store";
import { isMobileDevice } from "@/utils/isMobileDevice";

const FooterComp = ({ pageScroll }: any) => {
  const isMobile = isMobileDevice();
  const state = store();

  const onLinkClick = (id: string) => {
    if (state.page !== "eimos") {
      window.location.href = "/home-page";
      state.onPageChange("eimos");
    } else {
      pageScroll(id);
    }
  };
  return (
    <>
      {!isMobile ? (
        <div className={styles["footer-wrapper"]}>
          <div className="wrapper-center" style={{ flexDirection: "row" }}>
            <div className={styles["shuopan-main-service"]}>
              <div>
                <div className={styles["logo"]}>
                  <Image
                    src={productLogo}
                    alt="product"
                    style={{
                      width: "100%",
                      height: "100%",
                      verticalAlign: "bottom",
                    }}
                  />
                </div>
                <span>产品</span>
              </div>
              <a onClick={() => onLinkClick("IBA")}>智能业务解析(IBA)</a>
              <a onClick={() => onLinkClick("LTC")}>线索到回款(LTC)</a>
              <a onClick={() => onLinkClick("ISMP")}>集成计划管理(ISMP)</a>
              <a onClick={() => onLinkClick("plan")}>新产品导入(NPI)</a>
            </div>
            <div className={styles["shuopan-main-service"]}>
              <div>
                <div className={styles["logo"]}>
                  <Image
                    src={sourceLogo}
                    alt="source"
                    style={{
                      width: "100%",
                      height: "100%",
                      verticalAlign: "bottom",
                    }}
                  />
                </div>
                <span>资源中心</span>
              </div>
              <Link
                href="/info-center"
                onClick={() => state.onPageChange("info")}
              >
                信息发布
              </Link>
            </div>
            <div className={styles["shuopan-main-service"]}>
              <div>
                <div className={styles["logo"]}>
                  <Image
                    src={contactLogo}
                    alt="phone"
                    style={{
                      width: "100%",
                      height: "100%",
                      verticalAlign: "bottom",
                    }}
                  />
                </div>
                <span>联系我们</span>
              </div>
              <a>电话：0571-83580606</a>
              <a>邮箱：zhaopin@boulderaitech.com</a>
              <a onClick={() => onLinkClick("IBA")}>获取演示</a>
            </div>
            <div
              className={styles["shuopan-main-service"]}
              style={{ borderRight: "none" }}
            >
              <div>
                <div className={styles["logo"]}>
                  <Image
                    src={aboutLogo}
                    alt="about"
                    style={{
                      width: "100%",
                      height: "100%",
                      verticalAlign: "bottom",
                    }}
                  />
                </div>
                <span>关于我们</span>
              </div>
              <Link
                href="/about-us"
                onClick={() => state.onPageChange("about")}
              >
                公司介绍
              </Link>
              <Link href="/join-us" onClick={() => state.onPageChange("join")}>
                加入我们
              </Link>
            </div>
          </div>
          <div className={styles["copyright-info"]}>
            <div>
              <Image
                src={emblemLogo}
                alt="emblem"
                style={{
                  width: "100%",
                  height: "100%",
                  verticalAlign: "bottom",
                }}
              />
            </div>
            <div
              style={{
                display: "inline",
                color: "#656565",
                paddingLeft: 8,
              }}
              className=""
            >
              版权所有 2021-2023 杭州硕磐智能科技有限公司 浙ICP备23400000203号-1
            </div>
          </div>
        </div>
      ) : (
        <div className={`${"wrapper-center"} ${styles["mobile-footer"]}`}>
          <div
            className={styles["contact-us"]}
            onClick={() => {
              window.location.href = "/contact-me";
            }}
          >
            联系我们
          </div>
          <div className={styles["copyright"]}>
            <Image src={emblemImg} alt="emblem" width={14} height={14} />
            <span style={{ padding: 5 }}>
              版权所有 2021-2023 杭州硕磐智能科技有限公司 浙ICP备23400000203号-1
            </span>
          </div>
        </div>
      )}
    </>
  );
};
export default FooterComp;
