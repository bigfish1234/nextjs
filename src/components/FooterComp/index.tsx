import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { store } from "@/store";

import emblemLogo from "/public/national-emblem.png";
import aboutLogo from "/public/about.png";
import contactLogo from "/public/phone.png";
import sourceLogo from "/public/about.png";
import productLogo from "/public/product.png";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";

const FooterComp = ({ pageScroll }: any) => {
  const state = store();
  const path = usePathname();
  const router = useRouter();

  const onLinkClick = (id: string) => {
    if (path !== "/index") {
      router.push("/index");
    } else {
      pageScroll(id);
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

  return (
    <div>
      {!isMobile ? (
        <div className={styles["footer-wrapper"]}>
          <div className="wrapper-center" style={{ flexDirection: "row" }}>
            <div className={styles["shuopan-main-service"]}>
              <div>
                <div className={styles["logo"]}>
                  <Image
                    src={productLogo}
                    alt="应用及解决方案，智能业务解析(IBA)，线索到回款(LTC)，集成供应链(ISC)"
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
                    alt="资源中心"
                    style={{
                      width: "100%",
                      height: "100%",
                      verticalAlign: "bottom",
                    }}
                  />
                </div>
                <span>资源中心</span>
              </div>
              <Link href="/information-center">信息发布</Link>
            </div>
            <div className={styles["shuopan-main-service"]}>
              <div>
                <div className={styles["logo"]}>
                  <Image
                    src={contactLogo}
                    alt="联系我们"
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
                    alt="关于我们"
                    style={{
                      width: "100%",
                      height: "100%",
                      verticalAlign: "bottom",
                    }}
                  />
                </div>
                <span>关于我们</span>
              </div>
              <Link href="/corporate-information">公司介绍</Link>
              <Link href="/recruitment">加入我们</Link>
            </div>
          </div>
          <div className={styles["copyright-info"]}>
            <div>
              <Image
                src={emblemLogo}
                alt="版权所有 2021-2023 杭州硕磐智能科技有限公司 浙ICP备23400000203号-1"
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
              router.push("/contact-us");
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
