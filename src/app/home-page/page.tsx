import Image from "next/image";
import styles from "../page.module.css";
import TabHeader from "@/components/TabHearder";
import SwiperHeader from "@/components/SwiperHeader";
import homeStyle from "./index.module.css";
import homeImg from "@/images/home-img2.png";
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
import FooterComp from "@/components/FooterComp";

const Home = () => {
  const imgList = [img360, intelligenceImg, contractImg, npiImg, cpqImg];
  const titleList = [
    "场景化的客户，线索和商机管理，实现产品、渠道、客户之间自动查找与匹配；精准投入销售资源，提升从线索到合同转化率",
    "订单履行全流程可视，履行进度可预测，异常可管理，一张视图实现三流合一，信息高效互通与共享",
    "通过对不同销售场景下合同数据要素的解构，场景化知识图谱的构建，依据明确的业务规则，管好合同的生成和履行",
    "多维模型实现对客户需求快速排序；产品相似相近特征搜索，提高产品配置效率",
    "管理从需求结构化-配置推荐-项目成本概算-项目报价的关键流程，加速产品配置输出，提高商机转化，提高项目盈利测算能力和签约质量",
  ];

  const chainList = [ipsImg, ipsXiaosImg];
  const descriptionList = [
    "一站式智能销售预测。丰富的销售预测模版，可适配企业多场景全渠道的机会点、项目、框架合同、要货计划的预测管理",
    "基于价值导向的产品结构化和归一化AI算法。面向客户需求，取得成本和效率的相对平衡，实现公司价值的最大化 ",
  ];

  const abilityList = [
    "聚焦企业核心业务线，实现线索到回款、收入到利润，关键经营指标可视，逐段逐层自动解析定位业务问题、生成任务令闭环管理",
    "多场景应用：日报、周报、月度经营分析",
    "基于规则数据业务异常主动预警",
    "搜索式指标自动计算功能",
  ];
  return (
    <div className={styles.main}>
      {/* swiper */}
      {/* <SwiperHeader imgUrl={homeImg} /> */}

      {/* navgator */}
      <div className={homeStyle["header-link"]}>
        <div className={homeStyle["link-item"]}>
          <a>EIMOS</a>
          <a>业务应用解决方案</a>
          <a>EIMOS平台</a>
          <a>价值闭环</a>
          <a>我们的客户</a>
        </div>
      </div>

      {/* content */}
      <div className={homeStyle["wrapper-center"]}>
        {/* 架构图 */}
        <TabHeader
          h1="EIMOS 应用功能全视图"
          h2=" 构建全方位、全要素、全过程，高效、立体的，察打一体作战指挥系统"
        />
        <Image
          src={architectureImg}
          alt="architectureImg"
          className={homeStyle["structure-img"]}
        />
      </div>

      {/* 智能业务解析 */}
      <div className={homeStyle["analytics-wrapper"]}>
        <TabHeader h1="智能业务解析" h2="Intelligent Business Analytics" />
        <Image
          src={analyticsImg}
          alt="analyticsImg"
          className={homeStyle["analytics-img"]}
        />
        <div className={homeStyle["description"]}>
          聚焦企业核心业务线，实现线索到回款、收入到利润，关键经营指标可视，逐段逐层自动解析定位业务问题、生成任务令闭环管理
        </div>
      </div>

      <div className={homeStyle["wrapper-center"]}>
        {/* 线索到回款 */}
        <TabHeader h1="线索到回款" h2="Lead to Cash" />
        <Image src={ltcImg} alt="ltcImg" className={homeStyle["ltc-img"]} />

        <div className={homeStyle["flex-content"]}>
          {imgList.map((imgUrl: any, index: number) => {
            const description = titleList[index];
            return (
              <SwiperComp
                description={description}
                imgUrl={imgUrl}
                key={imgUrl}
              />
            );
          })}
        </div>
      </div>

      {/* 集成供应链 */}
      <div className={homeStyle["supply-chian"]}>
        <div className={homeStyle["wrapper-center"]}>
          <TabHeader h1="集成供应链" h2="Integrated Supply Chain" />
          <div className={homeStyle["flex-content"]}>
            {chainList.map((imgUrl: any, index: number) => {
              const des = descriptionList[index];
              return (
                <SwiperComp description={des} imgUrl={imgUrl} key={imgUrl} />
              );
            })}
          </div>
        </div>
      </div>

      <div className={homeStyle["wrapper-center"]}>
        {/* 应用及解决方案 */}
        <TabHeader h1="应用及解决方案" />
        <div className={homeStyle["tab-button"]}>
          <div className={homeStyle["tab-button-item"]}>智能业务解析(IBA)</div>
          <div className={homeStyle["tab-button-item"]}>线索到回款(LTC)</div>
          <div className={homeStyle["tab-button-item"]}>集成供应链(ISC)</div>
        </div>

        {/* 内容 */}
        <div className={homeStyle["item-content"]}>
          <div className={homeStyle["item-content-title"]}>
            <p className={homeStyle["content-title"]}>智能业务解析</p>
            <p>Intelligent Business Analytics</p>
          </div>
          <div className={homeStyle["item-content-ability"]}>
            <p className={homeStyle["content-title"]}>核心能力</p>
            <div className={homeStyle["content-ability"]}>
              {abilityList.map((item: string) => {
                return (
                  <div key={item} style={{ display: "flex", marginBottom: 16 }}>
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
      <div className={homeStyle["customer-section"]}>
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

      {/* footer */}
      <FooterComp />
    </div>
  );
};

export default Home;
