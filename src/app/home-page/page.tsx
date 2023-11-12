"use client";

import Image from "next/image";
import styles from "../page.module.css";
import TabHeader from "@/components/TabHearder";
import homeStyle from "./index.module.css";
import homeImg from "@/images/home-img2.png";
import infoCenter from "@/images/info-center.png";
import architectureImg from "@/images/architecture-img.png";
import ltcImg from "@/images/ltc.png";
import analyticsImg from "@/images/analytics.png";
import img360 from "@/images/dingd360@2x.png";
import contractImg from "@/images/zhinhtgl@2x.png";
import npiImg from "@/images/npi@2x.png";
import intelligenceImg from "@/images/zhinxspt@2x.png";
import SwiperComp from "@/components/SwiperComp";
import cpqImg from "@/images/cpq@2x.png";
import ipsImg from "@/images/ips@2x.png";
import ipsXiaosImg from "@/images/ips-xiaos@2x.png";
import getIcon from "@/images/gou@2x.png";
import sanfengLogo from "@/images/sanfeng@2x.png";
import supconLogo from "@/images/supcon@2x.png";
import qreLogo from "@/images/qre@2x.png";
import LayoutComp from "@/components/LayoutComp";
import { Imgs } from "@/images/mobileImg";
import { isMobileDevice } from "@/utils/isMobileDevice";
import { store } from "@/store";

const Home = () => {
  const isMobile = isMobileDevice();
  const state = store();

  // 页面顶部的轮播图组件
  const homeSlideList = {
    pc: [homeImg, infoCenter],
    mb: [Imgs.home],
  };

  // 线索到回款的轮播图
  const slideListOfCash = {
    pc: [
      [img360, intelligenceImg, cpqImg],
      [contractImg, npiImg],
      [intelligenceImg, cpqImg],
      [intelligenceImg, cpqImg],
      [intelligenceImg, cpqImg],
    ],
    mb: [
      [Imgs.npi, Imgs.analysis, Imgs.manage],
      [Imgs.npi, Imgs.analysis],
      [Imgs.npi, Imgs.analysis, Imgs.manage],
      [Imgs.npi, Imgs.manage],
      [Imgs.analysis, Imgs.manage],
    ],
  };

  const titleList = [
    "场景化的客户，线索和商机管理，实现产品、渠道、客户之间自动查找与匹配；精准投入销售资源，提升从线索到合同转化率",
    "订单履行全流程可视，履行进度可预测，异常可管理，一张视图实现三流合一，信息高效互通与共享",
    "通过对不同销售场景下合同数据要素的解构，场景化知识图谱的构建，依据明确的业务规则，管好合同的生成和履行",
    "多维模型实现对客户需求快速排序；产品相似相近特征搜索，提高产品配置效率",
    "管理从需求结构化-配置推荐-项目成本概算-项目报价的关键流程，加速产品配置输出，提高商机转化，提高项目盈利测算能力和签约质量",
  ];

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

  const descriptionList = [
    "一站式智能销售预测。丰富的销售预测模版，可适配企业多场景全渠道的机会点、项目、框架合同、要货计划的预测管理",
    "基于价值导向的产品结构化和归一化AI算法。面向客户需求，取得成本和效率的相对平衡，实现公司价值的最大化 ",
  ];

  const abilityList = [
    [
      "聚焦企业核心业务线，实现线索到回款、收入到利润，关键经营指标可视，逐段逐层自动解析定位业务问题、生成任务令闭环管理",
      "多场景应用：日报、周报、月度经营分析",
      "基于规则数据业务异常主动预警",
      "搜索式指标自动计算功能",
    ],
    ["1", "2"],
    ["1", "2", "3"],
  ];

  // 点击则页面滚动至指定位置
  const handleClick = (type: number) => {
    const id =
      type == 1
        ? "eimos"
        : type == 2
        ? "plan"
        : type == 3
        ? ""
        : type == 4
        ? ""
        : "customer";
    const dom = document.getElementById(id);
    dom && dom.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const onMouseEnter = () => {
    console.log(11);
    const imgDom = document.getElementById("architectureImg");
    if (imgDom) imgDom.style.boxShadow = "0px 5px 12px 0px rgba(0,0,0,0.06)";
  };

  const onMouseLeave = () => {
    const imgDom = document.getElementById("architectureImg");
    if (imgDom) imgDom.style.boxShadow = "";
  };

  return (
    <main>
      {/* swiper */}
      <LayoutComp
        slideList={isMobile ? homeSlideList.mb : homeSlideList.pc}
        page="home"
      >
        {/* navgator */}
        <div className={homeStyle["header-link"]}>
          <div className={homeStyle["link-item"]}>
            <span onClick={() => handleClick(1)}>EIMOS</span>
            <span onClick={() => handleClick(2)}>业务应用解决方案</span>
            <span onClick={() => handleClick(3)}>EIMOS平台</span>
            <span onClick={() => handleClick(4)}>价值闭环</span>
            <span onClick={() => handleClick(5)}>我们的客户</span>
          </div>
          {/* 移动端的箭头 */}
          {isMobile && (
            <div className={homeStyle["link-arrow"]}>
              <Image
                src={Imgs.arrow}
                alt="arrow"
                style={{ width: 28, height: 28, margin: "0 auto" }}
              />
            </div>
          )}
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
          <Image
            src={architectureImg}
            alt="architectureImg"
            id="architectureImg"
            className={homeStyle["structure-img"]}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </div>

        {/* 智能业务解析 */}
        <div className={homeStyle["analytics-wrapper"]}>
          <TabHeader h1="智能业务解析" h2="Intelligent Business Analytics" />
          {isMobile ? (
            <div className="wrapper-center">
              <SwiperComp
                description="聚焦企业核心业务线，实现线索到回款、收入到利润，关键经营指标可视，逐段逐层自动解析定位业务问题、生成任务令闭环管理"
                imgUrl={Imgs.analysis}
              />
            </div>
          ) : (
            <>
              <Image
                src={analyticsImg}
                alt="analyticsImg"
                className={homeStyle["analytics-img"]}
              />
              <div className={homeStyle["description"]}>
                聚焦企业核心业务线，实现线索到回款、收入到利润，关键经营指标可视，逐段逐层自动解析定位业务问题、生成任务令闭环管理
              </div>
            </>
          )}
        </div>

        <div className="wrapper-center">
          {/* 线索到回款 */}
          <TabHeader h1="线索到回款" h2="Lead to Cash" />
          <Image src={ltcImg} alt="ltcImg" className={homeStyle["ltc-img"]} />

          <div className={`${"wrapper-center"} ${homeStyle["flex-content"]}`}>
            {(isMobile ? slideListOfCash.mb : slideListOfCash.pc).map(
              (list: any[], index: number) => {
                const description = titleList[index];
                return (
                  <SwiperComp
                    description={description}
                    slideList={list}
                    index={index + 1}
                    key={index}
                  />
                );
              }
            )}
          </div>
        </div>

        {/* 集成供应链 */}
        <div className={homeStyle["supply-chian"]}>
          <div className="wrapper-center">
            <TabHeader h1="集成供应链" h2="Integrated Supply Chain" />
            <div className={`${"wrapper-center"} ${homeStyle["flex-content"]}`}>
              {(isMobile ? slideListOfChain.mb : slideListOfChain.pc).map(
                (list: any[], index: number) => {
                  const des = descriptionList[index];
                  return (
                    <SwiperComp
                      description={des}
                      slideList={list}
                      key={index}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>

        <div className="wrapper-center" id="plan">
          {/* 应用及解决方案 */}
          <TabHeader h1="应用及解决方案" />
          <div className={homeStyle["tab-button"]}>
            <div
              className={homeStyle["tab-button-item"]}
              onClick={() => state.onPlanChange("IBA")}
              style={
                state.plan == "IBA"
                  ? { color: "#F96F25", borderTop: "4px solid #F96F25" }
                  : { color: "black" }
              }
            >
              智能业务解析(IBA)
            </div>
            <div
              className={homeStyle["tab-button-item"]}
              onClick={() => state.onPlanChange("LTC")}
              style={
                state.plan == "LTC"
                  ? { color: "#F96F25", borderTop: "4px solid #F96F25" }
                  : { color: "black" }
              }
            >
              线索到回款(LTC)
            </div>
            <div
              className={homeStyle["tab-button-item"]}
              onClick={() => state.onPlanChange("ISC")}
              style={
                state.plan == "ISC"
                  ? { color: "#F96F25", borderTop: "4px solid #F96F25" }
                  : { color: "black" }
              }
            >
              集成供应链(ISC)
            </div>
          </div>

          {/* 内容 */}
          <div className={homeStyle["item-content"]}>
            <div className={homeStyle["item-content-title"]}>
              {state.plan == "IBA" ? (
                <>
                  <p className={homeStyle["content-title"]}>智能业务解析</p>
                  <p>Intelligent Business Analytics</p>
                </>
              ) : state.plan == "LTC" ? (
                <>
                  <p className={homeStyle["content-title"]}>线索到回款</p>
                  <p>Lead to Cash</p>
                </>
              ) : (
                <>
                  <p className={homeStyle["content-title"]}>集成供应链</p>
                  <p>Integrated Supply Chain</p>
                </>
              )}
            </div>
            <div className={homeStyle["item-content-ability"]}>
              <p className={homeStyle["content-title"]}>核心能力</p>
              <div className={homeStyle["content-ability"]}>
                {(state.plan == "IBA"
                  ? abilityList[0]
                  : state.plan == "LTC"
                  ? abilityList[1]
                  : abilityList[2]
                ).map((item: string) => {
                  return (
                    <div
                      key={item}
                      style={{ display: "flex", marginBottom: 16 }}
                    >
                      <div style={{ width: 16, marginRight: 8 }}>
                        <Image
                          src={getIcon}
                          alt="get"
                          width={16}
                          height={16}
                          style={{ marginRight: 8, display: "inline-block" }}
                        />
                      </div>
                      <div style={{ flex: 1 }}>{item}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <a className={homeStyle["link"]}>获取演示</a>
          </div>
        </div>

        {/* 我们的客户 */}
        <div className={homeStyle["customer-section"]} id="customer">
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

export default Home;
