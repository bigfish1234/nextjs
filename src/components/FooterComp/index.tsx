import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { store } from "@/store";
// import { isMobileDevice } from "@/utils/isMobileDevice";

import emblemLogo from "/public/national-emblem.png";
import aboutLogo from "/public/about.png";
import contactLogo from "/public/phone.png";
import sourceLogo from "/public/about.png";
import productLogo from "/public/product.png";
import { usePathname, useRouter } from "next/navigation";

const FooterComp = ({ pageScroll }: any) => {
  // const isMobile = isMobileDevice();
  const state = store();
  const path = usePathname();
  const router = useRouter();

  const onLinkClick = (id: string) => {
    if (path !== "/home-page") {
      router.push("/home-page");
    } else {
      pageScroll(id);
    }
  };
  return (
    <div>
      {!state.isMobile ? (
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
              <a onClick={() => onLinkClick("ISC")}>集成供应链(ISC)</a>
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
              <Link href="/info-center">信息发布</Link>
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
              <a>邮箱：info@boulderaitech.com</a>
              <a onClick={() => state.handleOpenChange(true)}>获取演示</a>
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
              <Link href="/about-us">公司介绍</Link>
              <Link href="/join-us">加入我们</Link>
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
              router.push("/contact-me");
            }}
          >
            联系我们
          </div>
          <div className={styles["copyright"]}>
            <Image src={emblemLogo} alt="emblem" width={14} height={14} />
            <span style={{ padding: 5 }}>
              版权所有 2021-2023 杭州硕磐智能科技有限公司 浙ICP备23400000203号-1
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default FooterComp;
