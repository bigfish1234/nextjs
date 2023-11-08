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

const Home = () => {
  const imgList = [img360, intelligenceImg, contractImg, npiImg, cpqImg];
  const titleList = [
    "场景化的客户，线索和商机管理，实现产品、渠道、客户之间自动查找与匹配；精准投入销售资源，提升从线索到合同转化率",
    "订单履行全流程可视，履行进度可预测，异常可管理，一张视图实现三流合一，信息高效互通与共享",
    "通过对不同销售场景下合同数据要素的解构，场景化知识图谱的构建，依据明确的业务规则，管好合同的生成和履行",
    "多维模型实现对客户需求快速排序；产品相似相近特征搜索，提高产品配置效率",
    "管理从需求结构化-配置推荐-项目成本概算-项目报价的关键流程，加速产品配置输出，提高商机转化，提高项目盈利测算能力和签约质量",
  ];
  return (
    <div className={styles.main}>
      {/* swiper */}
      <SwiperHeader imgUrl={homeImg} />

      {/* navgator */}
      <div className={homeStyle["navgatore-tab"]}>
        <div className={homeStyle["tab-item"]}>
          <span>EIMOS</span>
          <span>业务应用解决方案</span>
          <span>EIMOS平台</span>
          <span>价值闭环</span>
          <span>我们的客户</span>
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

        {/* 线索到回款 */}
        <TabHeader h1="线索到回款" h2="Lead to Cash" />
        <Image src={ltcImg} alt="ltcImg" className={homeStyle["ltc-img"]} />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
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

        {/* 集成供应链 */}
        <div className={homeStyle["supply-chian"]}></div>
      </div>
    </div>
  );
};

export default Home;
