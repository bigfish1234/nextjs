"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import homeStyle from "./index.module.css";
import { LayoutComp, SwiperComp, TabHeader } from "@/components";
import { ApplicationItem, LtcImgWrapper } from "./components";
import useHomeEvent from "./effects/useHomeEvent";
import { store } from "@/store";

import eimos_img from "/public/pc/home/eimos.png";
import sanfun_logo from "/public/pc/home/sf.png";
import supcon_logo from "/public/pc/home/zk.png";
import qre_logo from "/public/pc/home/qre.png";
import arrow from "/public/arrow.png";
import eimos_platform from "/public/pc/home/eimos-platform.png";
import eimos_platform_mb from "/public/mobile/home/eimos-platform.png";

import {
  APPLICATION_LIST,
  DESCRIPTION_LIST,
  TITLE_LIST,
  navList,
} from "./effects/const";

const Page = () => {
  const state = store();
  const {
    isShow,
    homeSlideList,
    slideListOfIBA,
    slideListOfCash,
    slideListOfChain,
    anchorClick,
    hoverShowShadow,
    leaveHideShadow,
    onArrowClick,
    handleIBAEvent,
    isHovered,
    setIsHovered,
  } = useHomeEvent();

  const router = useRouter();

  return (
    <div>
      {/* swiper */}
      <LayoutComp
        slideList={state.isMobile ? homeSlideList.mb : homeSlideList.pc}
        page="home"
        pageScroll={anchorClick}
      >
        {/* navgator */}
        <div className={homeStyle["header-link"]}>
          <div
            id="link-item"
            className={
              state.isMobile
                ? `${homeStyle["link-item"]} ${homeStyle["link-item-box"]}`
                : homeStyle["link-item"]
            }
          >
            {(navList || []).map((item: { id: string; title: string }) => {
              return (
                <span
                  className={homeStyle["hover-style"]}
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
                display: state.isMobile ? "block" : "none",
              }}
              onClick={onArrowClick}
            />
          </div>
        </div>

        {/* 架构图 */}
        <div className="wrapper-center" id="eimos">
          <TabHeader
            h1="EIMOS 应用功能全视图"
            h2={
              !state.isMobile &&
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
            slideList={state.isMobile ? slideListOfIBA.mb : slideListOfIBA.pc}
            description="聚焦企业核心业务线，实现线索到回款、收入到利润，关键经营指标可视，逐段逐层自动解析定位业务问题、生成任务令闭环管理"
            disable={true}
            item="IBA"
            handleIBAEvent={handleIBAEvent}
            isShow={isShow}
          />
        </div>

        {/* 线索到回款 */}
        <div className="wrapper-center" id="LTC">
          <TabHeader h1="线索到回款" h2="Lead to Cash" />
          <LtcImgWrapper isMobile={state.isMobile} anchorClick={anchorClick} />
          <div className={`${"wrapper-center"} ${homeStyle["flex-content"]}`}>
            {(state.isMobile ? slideListOfCash.mb : slideListOfCash.pc).map(
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
                    isMobile={state.isMobile}
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
              {(state.isMobile ? slideListOfChain.mb : slideListOfChain.pc).map(
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
        <div className="wrapper-center" id="plan" style={{ padding: "0 15px" }}>
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
                    isMobile={state.isMobile}
                  />
                );
              })}
            </div>

            <a
              className={homeStyle["link"]}
              onClick={() => {
                state.isMobile
                  ? router.push("/contact-me")
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
              src={state.isMobile ? eimos_platform_mb : eimos_platform}
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
