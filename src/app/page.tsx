"use client";
import Image from "next/image";
import Metadata from "next/head";
import { useRouter } from "next/navigation";
import homeStyle from "./index.module.css";
import { LayoutComp, SwiperComp, TabHeader } from "@/components";
import { store } from "@/store";

import eimos_img from "/public/images/pc/home/eimos.png";
import sanfun_logo from "/public/images/pc/home/sf.png";
import supcon_logo from "/public/images/pc/home/zk.png";
import qre_logo from "/public/images/pc/home/qre.png";
import arrow from "/public/images/arrow.png";
import eimos_platform from "/public/images/pc/home/eimos-platform.png";
import eimos_platform_mb from "/public/images/mobile/home/eimos-platform.png";
import { useEffect, useState } from "react";
import { MOBILE_REG } from "@/utils/isMobileDevice";

import home_banner from "/public/images/pc/home/home-banner.png";
import home_banner_m from "/public/images/mobile/home/home-banner.png";

import order from "/public/images/pc/home/order.png";
import platform from "/public/images/pc/home/ISM.png";
import manage from "/public/images/pc/home/ICM.png";
import npi from "/public/images/pc/home/npi.png";
import cpq from "/public/images/pc/home/cpq.png";

import order_m from "/public/images/mobile/home/order.png";
import platform_m from "/public/images/mobile/home/ISM.png";
import manage_m from "/public/images/mobile/home/ICM.png";
import npi_m from "/public/images/mobile/home/npi.png";
import cpq_m from "/public/images/mobile/home/cpq.png";

import ips_01 from "/public/images/pc/home/sales-forecast.png";
import ips_02 from "/public/images/pc/home/ips_02.png";

import ips_m_01 from "/public/images/mobile/home/sales-forecast.png";
import ips_m_02 from "/public/images/mobile/home/ips_02.png";
// import { store } from "@/store";

import info_banner from "/public/images/pc/info/info-banner.png";
import IBA_mb from "/public/images/mobile/home/IBA.png";
import IBA from "/public/images/pc/home/IBA.png";
import { ApplicationItem, LtcImgWrapper } from "@/components/IndexComponents";
import {
  APPLICATION_LIST,
  DESCRIPTION_LIST,
  TITLE_LIST,
  navList,
} from "@/lib/const";

const { useDebounceFn } = require("ahooks");

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const state = store();

  const [isShow, setIsShow] = useState(false);

  // banner
  const homeSlideList = {
    pc: [home_banner, info_banner],
    mb: [home_banner_m],
  };

  const slideListOfIBA = {
    pc: [IBA, IBA],
    mb: [IBA_mb],
  };

  // LTC
  const slideListOfCash = {
    pc: [[order], [platform], [manage], [npi], [cpq]],
    mb: [[order_m], [platform_m], [manage_m], [npi_m], [cpq_m]],
  };

  // ISC
  const slideListOfChain = {
    pc: [[ips_01], [ips_02]],
    mb: [[ips_m_01], [ips_m_02]],
  };

  // 锚点页面滑动
  const anchorClick = (type: string, e: any) => {
    state.handleNavChange(type);
    const dom = document.getElementById(type);

    if (dom) {
      dom.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 图片hover显示阴影
  const hoverShowShadow = () => {
    const imgDom = document.getElementById("eimos_img");
    if (imgDom) imgDom.style.boxShadow = "0px 5px 12px 0px rgba(0,0,0,0.06)";
  };
  const leaveHideShadow = () => {
    const imgDom = document.getElementById("eimos_img");
    if (imgDom) imgDom.style.boxShadow = "";
  };

  // 移动端点击按钮
  const onArrowClick = () => {
    const dom = document.getElementById("link-item");
    if (dom) {
      dom.scrollBy({
        left: 220,
        behavior: "smooth",
      });
    }
  };

  const handleIBAEvent = useDebounceFn(
    (type: number) => {
      const dom = document.getElementById("analytics-wrapper");
      if (!isMobile) {
        if (!type) {
          setIsShow(true);
          if (dom) {
            dom.style.backgroundImage =
              "radial-gradient(circle, white, #60a9f5)";
          }
        } else {
          setIsShow(false);
          if (dom) {
            dom.style.backgroundImage = "";
            dom.style.backgroundColor = "#EBF2FA";
          }
        }
      }
    },
    {
      wait: 300,
    }
  );

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

  return (
    <div>
      <Metadata>
        <title>硕磐智能</title>
      </Metadata>
      {/* swiper */}
      <LayoutComp
        slideList={isMobile ? homeSlideList.mb : homeSlideList.pc}
        page="home"
        pageScroll={anchorClick}
      >
        {/* navgator */}
        <div className={homeStyle["header-link"]}>
          <div
            id="link-item"
            className={
              isMobile
                ? `${homeStyle["link-item"]} ${homeStyle["link-item-box"]}`
                : homeStyle["link-item"]
            }
          >
            {(navList || []).map((item: { id: string; title: string }) => {
              return (
                <span
                  className={
                    state.nav == item.id ? homeStyle["hover-style"] : ""
                  }
                  key={item.id}
                  onClick={(e) => anchorClick(item.id, e)}
                >
                  {item.title}
                </span>
              );
            })}
          </div>
          <div className={homeStyle["link-arrow"]}>
            <Image
              src={arrow}
              alt="arrow"
              style={{
                width: 28,
                height: 28,
                margin: "0 auto",
                display: isMobile ? "block" : "none",
              }}
              onClick={onArrowClick}
            />
          </div>
        </div>

        {/* 架构图 */}
        <div
          className={`${"wrapper-center"} ${homeStyle["eimos-wrapper"]}`}
          id="eimos"
        >
          <TabHeader
            h1="EIMOS 应用功能全视图"
            h2={
              !isMobile &&
              "构建全方位、全要素、全过程，高效、立体的，察打一体作战指挥系统"
            }
          />
          <div className="img-wrapper">
            <Image
              src={eimos_img}
              alt="EIMOS应用功能全视图-构建全方位、全要素、全过程，高效、立体的，察打一体作战指挥系统"
              id="eimos_img"
              className={homeStyle["structure-img"]}
              onMouseEnter={hoverShowShadow}
              onMouseLeave={leaveHideShadow}
            />
          </div>
        </div>

        {/* 智能业务解析 */}
        <div className={homeStyle["analytics-wrapper"]} id="IBA">
          <TabHeader h1="智能业务解析" h2="Intelligent Business Analytics" />
          <SwiperComp
            slideList={isMobile ? slideListOfIBA.mb : slideListOfIBA.pc}
            description="聚焦企业核心业务线，实现线索到回款、收入到利润，关键经营指标可视，逐段逐层自动解析定位业务问题、生成任务令闭环管理"
            disable={true}
            item="IBA"
            handleIBAEvent={handleIBAEvent}
            isShow={isShow}
          />
        </div>

        {/* 线索到回款 */}
        <div
          className={`${"wrapper-center"} ${homeStyle["ltc-wrapper"]}`}
          id="LTC"
        >
          <TabHeader h1="线索到回款" h2="Lead to Cash" />
          <LtcImgWrapper isMobile={isMobile} anchorClick={anchorClick} />
          <div className={`${"wrapper-center"} ${homeStyle["flex-content"]}`}>
            {(isMobile ? slideListOfCash.mb : slideListOfCash.pc).map(
              (list: any[], index: number) => {
                const description = TITLE_LIST[index];
                const id = ["order", "ISMP", "ICM", "NPI"][index];
                return (
                  <SwiperComp
                    description={description}
                    slideList={list}
                    index={index}
                    key={index}
                    id={id}
                    isMobile={isMobile}
                  />
                );
              }
            )}
          </div>
        </div>

        {/* 集成供应链 */}
        <div className={homeStyle["supply-chian"]} id="ISC">
          <div className="wrapper-center">
            <TabHeader h1="集成供应链" h2="Integrated Supply Chain" />
            <div className={`${"wrapper-center"} ${homeStyle["flex-content"]}`}>
              {(isMobile ? slideListOfChain.mb : slideListOfChain.pc).map(
                (list: any[], index: number) => {
                  const des = DESCRIPTION_LIST[index];
                  return (
                    <SwiperComp
                      description={des}
                      slideList={list}
                      key={index}
                      index={index}
                      disable={true}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* 应用及解决方案 */}
        <div
          className="wrapper-center"
          id="plan"
          style={{ padding: "0 15px", paddingTop: isMobile ? 30 : 60 }}
        >
          <TabHeader h1="应用及解决方案" />
          <div className={homeStyle["tab-button"]}>
            <div
              className={
                state.plan == "IBA"
                  ? `${homeStyle["tab-button-item"]} ${homeStyle["link-hover"]}`
                  : homeStyle["tab-button-item"]
              }
              onClick={() => state.onPlanChange("IBA")}
            >
              智能业务解析(IBA)
            </div>
            <div
              className={
                state.plan == "LTC"
                  ? `${homeStyle["tab-button-item"]} ${homeStyle["link-hover"]}`
                  : homeStyle["tab-button-item"]
              }
              onClick={() => state.onPlanChange("LTC")}
            >
              线索到回款(LTC)
            </div>
            <div
              className={
                state.plan == "ISC"
                  ? `${homeStyle["tab-button-item"]} ${homeStyle["link-hover"]}`
                  : homeStyle["tab-button-item"]
              }
              onClick={() => state.onPlanChange("ISC")}
            >
              集成供应链(ISC)
            </div>
          </div>
          <div className={homeStyle["item-content"]}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {APPLICATION_LIST[state.plan].map((item: any, index: number) => {
                return (
                  <ApplicationItem
                    key={item.name}
                    item={item}
                    index={index}
                    count={APPLICATION_LIST[state.plan].length}
                    isMobile={isMobile}
                  />
                );
              })}
            </div>

            <a
              className={homeStyle["link"]}
              onClick={() => {
                isMobile
                  ? router.push("/contact-us")
                  : state.handleOpenChange(true);
              }}
            >
              获取演示
            </a>
          </div>
        </div>

        {/* EIMOS平台 */}
        <div
          className={homeStyle["eimos-platform-section"]}
          id="eimos-platform"
        >
          <TabHeader h1="EIMOS平台" h2="EIMOS Platform as a Service" />
          <div className="img-wrapper">
            <Image
              src={isMobile ? eimos_platform_mb : eimos_platform}
              alt="EIMOS平台"
              quality={100}
              className={homeStyle["eimos-platform-img"]}
            />
          </div>
        </div>

        {/* 我们的客户 */}
        <div className={homeStyle["customer-section"]} id="cus">
          <TabHeader h1="我们的客户" />
          <div className={homeStyle["cusomer-logo"]}>
            <div className={homeStyle["logo-box"]}>
              <Image
                src={qre_logo}
                alt="qre"
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={homeStyle["logo-box"]}>
              <Image
                src={supcon_logo}
                alt="supcon"
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={homeStyle["logo-box"]}>
              <Image
                src={sanfun_logo}
                alt="sanfeng"
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </LayoutComp>
    </div>
  );
};

export default Page;
