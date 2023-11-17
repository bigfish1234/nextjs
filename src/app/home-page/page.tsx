"use client";

import Image from "next/image";
import TabHeader from "@/components/TabHearder";
import homeStyle from "./index.module.css";
import homeImg from "@/images/header/banner.png";
import spznImg from "@/images/header/shuopzn.png";
import architectureImg from "@/images/architecture-img.png";
import analyticsImg from "@/images/analytics.png";
import img360 from "@/images/dingd360@2x.png";
import contractImg from "@/images/zhinhtgl@2x.png";
import npiImg from "@/images/npi@2x.png";
import intelligenceImg from "@/images/zhinxspt@2x.png";
import SwiperComp from "@/components/SwiperComp";
import cpqImg from "@/images/cpq@2x.png";
import ipsImg from "@/images/ips@2x.png";
import ipsXiaosImg from "@/images/ips-xiaos@2x.png";
import sanfengLogo from "@/images/sanfeng@2x.png";
import supconLogo from "@/images/supcon@2x.png";
import qreLogo from "@/images/qre@2x.png";
import LayoutComp from "@/components/LayoutComp";
import { Imgs } from "@/images/mobileImg";
import { isMobileDevice } from "@/utils/isMobileDevice";
import { store } from "@/store";
import {
  APPLICATION_LIST,
  DESCRIPTION_LIST,
  TITLE_LIST,
  capabilityList,
  navList,
} from "./effects/const";
import ApplicationItem from "./components/ApplicationItem";
import LtcImgWrapper from "./components/LtcImgWrapper";
import { useState } from "react";
import DetailComp from "./components/DetailComp";

const Page = () => {
  const isMobile = isMobileDevice();
  const [isShow, setIsShow] = useState(false);
  const state = store();

  // 页面顶部的轮播图组件
  const homeSlideList = {
    pc: [homeImg, spznImg],
    mb: [Imgs.home],
  };

  // 线索到回款的轮播图
  const slideListOfCash = {
    pc: [[img360], [intelligenceImg], [contractImg], [npiImg], [cpqImg]],
    mb: [
      [Imgs.order],
      [Imgs.platform],
      [Imgs.cpq],
      [Imgs.npi, Imgs.manage],
      [Imgs.analysis, Imgs.manage],
    ],
  };

  const slideListOfChain = {
    pc: [
      [ipsImg, ipsXiaosImg],
      [ipsImg, ipsXiaosImg],
    ],
    mb: [
      [Imgs.ipsplan, Imgs.ipsprediction],
      [Imgs.ipsplan, Imgs.ipsprediction],
    ],
  };

  // 锚点页面滑动
  const anchorClick = (type: string) => {
    const dom = document.getElementById(type);
    if (dom) {
      dom.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 图片hover显示阴影
  const hoverShowShadow = () => {
    const imgDom = document.getElementById("architectureImg");
    if (imgDom) imgDom.style.boxShadow = "0px 5px 12px 0px rgba(0,0,0,0.06)";
  };
  const leaveHideShadow = () => {
    const imgDom = document.getElementById("architectureImg");
    if (imgDom) imgDom.style.boxShadow = "";
  };

  // 移动端点击按钮
  const onArrowClick = () => {
    const dom = document.getElementById("cus");
  };

  const handleIBAEvent = (type: number) => {
    const dom = document.getElementById("analytics-wrapper");
    if (!type) {
      setIsShow(true);
      if (dom) {
        dom.style.backgroundImage = "radial-gradient(circle, white, #60a9f5)";
      }
    } else {
      setIsShow(false);
      if (dom) {
        dom.style.backgroundImage = "";
        dom.style.backgroundColor = "#EBF2FA";
      }
    }
  };

  return (
    <main>
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
                  className={homeStyle["hover-style"]}
                  key={item.id}
                  onClick={() => anchorClick(item.id)}
                >
                  {item.title}
                </span>
              );
            })}
          </div>

          <div className={homeStyle["link-arrow"]}>
            <Image
              src={Imgs.arrow}
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

        {/* content */}
        <div className="wrapper-center" id="eimos">
          {/* 架构图 */}
          <TabHeader
            h1="EIMOS 应用功能全视图"
            h2={
              !isMobile &&
              "构建全方位、全要素、全过程，高效、立体的，察打一体作战指挥系统"
            }
          />
          <div className="img-wrapper">
            <Image
              src={architectureImg}
              alt="architectureImg"
              id="architectureImg"
              className={homeStyle["structure-img"]}
              onMouseEnter={hoverShowShadow}
              onMouseLeave={leaveHideShadow}
            />
          </div>
        </div>

        {/* 智能业务解析 */}
        <div className={homeStyle["analytics-wrapper"]} id="IBA">
          <TabHeader h1="智能业务解析" h2="Intelligent Business Analytics" />
          {isMobile ? (
            <div className="wrapper-center">
              <SwiperComp
                slideList={
                  isMobile ? slideListOfChain.mb[0] : slideListOfChain.pc[0]
                }
                description="聚焦企业核心业务线，实现线索到回款、收入到利润，关键经营指标可视，逐段逐层自动解析定位业务问题、生成任务令闭环管理"
                disable={true}
              />
            </div>
          ) : (
            <div
              onMouseEnter={() => handleIBAEvent(0)}
              onMouseLeave={() => handleIBAEvent(1)}
            >
              <div
                className={homeStyle["analytics-img-wrapper"]}
                id="analytics-wrapper"
              >
                {/* <DetailComp position="IBA" /> */}
                {isShow ? (
                  <DetailComp position="IBA" />
                ) : (
                  <Image
                    src={analyticsImg}
                    alt="analyticsImg"
                    className={homeStyle["analytics-img"]}
                  />
                )}
              </div>
              <div className={homeStyle["description"]}>
                聚焦企业核心业务线，实现线索到回款、收入到利润，关键经营指标可视，逐段逐层自动解析定位业务问题、生成任务令闭环管理
              </div>
            </div>
          )}
        </div>

        {/* 线索到回款 */}
        <div className="wrapper-center" id="LTC">
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

        <div className="wrapper-center" id="plan" style={{ padding: "0 15px" }}>
          {/* 应用及解决方案 */}
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

          {/* 内容 */}
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

            <a className={homeStyle["link"]}>获取演示</a>
          </div>
        </div>

        {/* 我们的客户 */}
        <div className={homeStyle["customer-section"]} id="cus">
          <TabHeader h1="我们的客户" />
          <div className={homeStyle["cusomer-logo"]}>
            <div className={homeStyle["logo-box"]}>
              <Image
                src={qreLogo}
                alt="qre"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={homeStyle["logo-box"]}>
              <Image
                src={supconLogo}
                alt="supcon"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={homeStyle["logo-box"]}>
              <Image
                src={sanfengLogo}
                alt="sanfeng"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </LayoutComp>
    </main>
  );
};

export default Page;
