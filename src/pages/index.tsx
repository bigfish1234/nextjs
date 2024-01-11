"use client";
import Image from "next/image";
import Metadata from "next/head";
import { useRouter } from "next/navigation";
import homeStyle from "./index.module.css";
import { LayoutComp, SwiperComp, TabHeader } from "@/components";
import { store } from "@/store";

import eimos_img from "/public/images/pc/home/eimos.svg";
import sanfun_logo from "/public/images/pc/home/sf.png";
import supcon_logo from "/public/images/pc/home/zk.png";
import qre_logo from "/public/images/pc/home/qre.png";
import arrow from "/public/images/arrow.png";
import eimos_platform from "/public/images/pc/home/eimos-platform.svg";
import eimos_platform_mb from "/public/images/mobile/home/eimos-platform.svg";
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

import IBA_mb from "/public/images/mobile/home/IBA.png";
import IBA from "/public/images/pc/home/IBA.png";
import { ApplicationItem, LtcImgWrapper } from "@/components/IndexComponents";
import {
  APPLICATION_LIST,
  DESCRIPTION_LIST,
  TITLE_LIST,
  navList,
} from "@/lib/const";
import { isElementInViewport } from "@/utils/isElementInViewport";

import order_01 from "/public/images/pc/home/order_01.png";
import order_02 from "/public/images/pc/home/order_02.png";
import order_03 from "/public/images/pc/home/order_03.png";
import ISM_01 from "/public/images/pc/home/ISM_01.png";
import ISM_02 from "/public/images/pc/home/ISM_02.png";
import ISM_03 from "/public/images/pc/home/ISM_03.png";
import ISM_04 from "/public/images/pc/home/ISM_04.png";
import ISM_05 from "/public/images/pc/home/ISM_05.png";
import ISM_06 from "/public/images/pc/home/ISM_06.png";
import ISM_07 from "/public/images/pc/home/ISM_07.png";
import ICM_01 from "/public/images/pc/home/ICM_01.png";
import NPI_01 from "/public/images/pc/home/NPI_01.png";
import NPI_02 from "/public/images/pc/home/NPI_02.png";
import NPI_03 from "/public/images/pc/home/NPI_03.png";
import NPI_04 from "/public/images/pc/home/NPI_04.png";
import NPI_05 from "/public/images/pc/home/NPI_05.png";
import NPI_06 from "/public/images/pc/home/NPI_06.png";
import CPQ_01 from "/public/images/pc/home/CPQ_01.png";

import IPS_D1 from "/public/images/pc/home/IPS_D1.png";
import IPS_D2 from "/public/images/pc/home/IPS_D2.png";
import IPS_D3 from "/public/images/pc/home/IPS_D3.png";
import IPS_D4 from "/public/images/pc/home/IPS_D4.png";

import IPS_DA1 from "/public/images/pc/home/IPS_DA01.png";
import IPS_DA2 from "/public/images/pc/home/IPS_DA02.png";
import IPS_DA3 from "/public/images/pc/home/IPS_DA03.png";

const { useDebounceFn } = require("ahooks");

const Page = () => {
  const [isMobile, setIsMobile] = useState<any>(false);
  const [homeSlideList, setHomeSlideList] = useState<any>([]);
  const router = useRouter();
  const state = store();

  const [isShow, setIsShow] = useState(false);

  const slideListOfIBA = {
    pc: [IBA],
    mb: [IBA_mb],
  };

  // LTC
  const slideListOfCash = {
    pc: [[order], [platform], [manage], [npi], [cpq]],
    mb: [[order_m], [platform_m], [manage_m], [npi_m], [cpq_m]],
  };

  const slideOfLTCDetailImg = [
    [order_01, order_02, order_03],
    [ISM_01, ISM_02, ISM_03, ISM_04, ISM_05, ISM_06, ISM_07],
    [ICM_01],
    [NPI_01, NPI_02, NPI_03, NPI_04, NPI_05, NPI_06],
    [CPQ_01],
  ];

  const slideOfISCDetailImg = [
    [IPS_D1, IPS_D2, IPS_D3, IPS_D4],
    [IPS_DA1, IPS_DA2, IPS_DA3],
  ];

  // ISC
  const slideListOfChain = {
    pc: [[ips_01], [ips_02]],
    mb: [[ips_m_01], [ips_m_02]],
  };

  // 锚点页面滑动
  const anchorClick = (type: string, e: any) => {
    const dom = document.getElementById(type);
    const navbarHeight = document.getElementById("nav_bar")?.offsetHeight || 0;
    if (dom) {
      // 判断是否为ios
      const isIos = !!navigator.userAgent.match(
        /\(i[^;]+;( U;)? CPU.+Mac OS X/
      );
      // if (isIos) {
      //   dom.scrollTop = 1000;
      //   dom.style.scrollBehavior = "smooth";
      //   console.log(dom.offsetTop);
      // } else {
      //   dom.scrollIntoView({ behavior: "smooth", block: "start" });
      // }

      dom.style.scrollBehavior = "smooth";
      window.scrollTo({
        behavior: "smooth",
        top: dom.offsetTop - navbarHeight,
      });
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
    isMobile
      ? setHomeSlideList([home_banner_m])
      : setHomeSlideList([home_banner]);

    window.addEventListener("scroll", function () {
      navList.forEach((item: any) => {
        if (isElementInViewport(item.id)) {
          state.handleNavChange(item.id);
        }
      });
    });
  }, []);

  return (
    <div>
      <Metadata>
        <title>硕磐智能 - EIMOS</title>
      </Metadata>
      {/* swiper */}
      <LayoutComp
        slideList={homeSlideList}
        page="home"
        pageScroll={anchorClick}
      >
        {/* navgator */}
        <div
          id="nav_bar"
          className={
            isMobile
              ? homeStyle["header-link"]
              : `${homeStyle["header-link"]} ${homeStyle["header-link-sticky"]}`
          }
        >
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
                <div
                  key={item.id}
                  style={
                    state.nav == item.id
                      ? {
                          borderBottom: "4px solid #F96F25",
                          color: "#F96F25",
                        }
                      : {}
                  }
                  onClick={(e) => anchorClick(item.id, e)}
                >
                  <span className={homeStyle["nav-hover"]}>{item.title}</span>
                </div>
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
            h2="构建全方位、全要素、全过程，高效、立体的，察打一体作战指挥系统"
            id="eimos"
          />
          <div className="img-wrapper">
            <Image
              src={eimos_img}
              alt="1.经营决策层(多主题、多维度):智能经营解析IBA(多主题:收入、利润、回款、存货, 多维度:产业、产品、市场、客户); 
              2.流程运营层(多战线)：合同/订单360(LTC)、物的360(ISC)、研发项目360(IPD)、供应链360(ITR)、财务360(FIN)...;
              3.业务作业层(多模块):智能销售管理(ISMP)、产品配置报价(CPQ)、智能合同管理(ICM)、开票与回款管理、新产品导入(NPI)、产品配置生命周期管理(CLM)、集成计划(IPS);
              4.平台支撑层(可组装构件):数据资产平台、应用组装平台、数据服务平台;"
              id="eimos_img"
              className={homeStyle["structure-img"]}
              onMouseEnter={hoverShowShadow}
              onMouseLeave={leaveHideShadow}
            />
          </div>
        </div>

        {/* 智能业务解析 */}
        <div className={homeStyle["analytics-wrapper"]} id="IBA_ele">
          <TabHeader h1="智能业务解析" h2="Intelligent Business Analytics" />
          <SwiperComp
            slideList={isMobile ? slideListOfIBA.mb : slideListOfIBA.pc}
            description="聚焦企业核心业务线，实现线索到回款、收入到利润，关键经营指标可视，逐段逐层自动解析定位业务问题、生成任务令闭环管理"
            disable={true}
            item="IBA"
            handleIBAEvent={handleIBAEvent}
            isShow={isShow}
            alt="智能业务解析（IBA-Intelligence Business Analytics）"
          />
        </div>

        {/* 线索到回款 */}
        <div className={`${"wrapper-center"} ${homeStyle["ltc-wrapper"]}`}>
          <TabHeader h1="线索到回款" h2="Lead to Cash" id="LTC" />
          <LtcImgWrapper isMobile={isMobile} anchorClick={anchorClick} />
          <div className={`${"wrapper-center"} ${homeStyle["flex-content"]}`}>
            {(isMobile ? slideListOfCash.mb : slideListOfCash.pc).map(
              (list: any[], index: number) => {
                const description = TITLE_LIST[index];
                const id = ["order", "ISMP", "ICM", "NPI", "CPQ"][index];
                const alt = [
                  "订单360(Full Visibility and Control of Contract Execution)",
                  "智能销售管理平台(ISM-Intelligent Sales Management)",
                  "智能合同管理(ICM-Intelligent Contract Management)",
                  "新产品导入(NPI-New Product Insertion)",
                  "产品配置报价(CPQ-Product configuration quotation)",
                ][index];
                const detailImgs = slideOfLTCDetailImg[index];
                return (
                  <SwiperComp
                    description={description}
                    slideList={list}
                    detailImgs={detailImgs}
                    index={index}
                    key={index}
                    id={id}
                    alt={alt}
                  />
                );
              }
            )}
          </div>
        </div>

        {/* 集成供应链 */}
        <div className={homeStyle["supply-chian"]}>
          <div className="wrapper-center">
            <TabHeader h1="集成供应链" h2="Integrated Supply Chain" id="ISC" />
            <div className={`${"wrapper-center"} ${homeStyle["flex-content"]}`}>
              {(isMobile ? slideListOfChain.mb : slideListOfChain.pc).map(
                (list: any[], index: number) => {
                  const des = DESCRIPTION_LIST[index];
                  const alt = [
                    "IPS-销售预测(Sales Forecast)",
                    "IPS-销售与运作计划(Sales & Operation Planning)",
                  ][index];
                  const detailImgs = slideOfISCDetailImg[index];
                  return (
                    <SwiperComp
                      description={des}
                      slideList={list}
                      key={index}
                      index={index}
                      alt={alt}
                      desVisible={false}
                      detailImgs={detailImgs}
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
          style={isMobile ? { padding: "0 15px" } : {}}
        >
          <TabHeader h1="应用及解决方案" id="plan" />
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
            <ApplicationItem
              item={APPLICATION_LIST[state.plan]}
              isMobile={isMobile}
            />
            <a
              className={
                !isMobile
                  ? `${homeStyle["link"]} ${homeStyle["link-pc"]}`
                  : `${homeStyle["link"]} `
              }
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
        <div className={homeStyle["eimos-platform-section"]}>
          <TabHeader
            h1="EIMOS平台"
            h2="EIMOS Platform as a Service"
            id="eimos-platform"
          />
          <div className="img-wrapper">
            <Image
              src={isMobile ? eimos_platform_mb : eimos_platform}
              alt="EIMOS平台:应用组装平台(业务组件、BI组件)、数据资产平台(科学管理模型、分析模型)、通用平台(用户管理、权限中心、任务管理)、数据服务平台(集成转换、指标解析器)、业务系统、大数据平台；IT快速相应、业务持续优化、系统持续适配、数字化持续变革"
              quality={100}
              className={homeStyle["eimos-platform-img"]}
            />
          </div>
        </div>

        {/* 我们的客户 */}
        <div className={homeStyle["customer-section"]}>
          <TabHeader h1="我们的客户" id="cus" />
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
