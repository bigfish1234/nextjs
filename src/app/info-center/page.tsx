import InfomationBar from "@/components/InfomationBar";
import infoStyle from "./index.module.css";
import LayoutComp from "@/components/LayoutComp";
import infoCenterImg from "@/images/infomation/info-center.png";

const Home = () => {
  const infoList = [
    {
      time: "2023-8-18",
      title: "硕磐企业智能管理操作系统EIMOS",
      description:
        "是硕磐智能基于自主知识产权开发，融合了大数据、知识图谱、人工智能算法、运筹规划算法、云原生等核心技术的 企业智能化管理操作系统，可满足制造业各行业复杂的智能决策、经营规则精益化、流程优化管理等需求，是把端到端的精益化管理思维注入到产品基因的一款智 能化数据平台。",
      imgUrl: "",
    },
    {
      time: "2023-8-18",
      title: "硕磐企业智能管理操作系统EIMOS",
      description:
        "是硕磐智能基于自主知识产权开发，融合了大数据、知识图谱、人工智能算法、运筹规划算法、云原生等核心技术的 企业智能化管理操作系统，可满足制造业各行业复杂的智能决策、经营规则精益化、流程优化管理等需求，是把端到端的精益化管理思维注入到产品基因的一款智 能化数据平台。",
      imgUrl: "",
    },
    {
      time: "2023-8-18",
      title: "硕磐企业智能管理操作系统EIMOS",
      description:
        "是硕磐智能基于自主知识产权开发，融合了大数据、知识图谱、人工智能算法、运筹规划算法、云原生等核心技术的 企业智能化管理操作系统，可满足制造业各行业复杂的智能决策、经营规则精益化、流程优化管理等需求，是把端到端的精益化管理思维注入到产品基因的一款智 能化数据平台。",
      imgUrl: "",
    },
    {
      time: "2023-8-18",
      title: "硕磐企业智能管理操作系统EIMOS",
      description:
        "是硕磐智能基于自主知识产权开发，融合了大数据、知识图谱、人工智能算法、运筹规划算法、云原生等核心技术的 企业智能化管理操作系统，可满足制造业各行业复杂的智能决策、经营规则精益化、流程优化管理等需求，是把端到端的精益化管理思维注入到产品基因的一款智 能化数据平台。",
      imgUrl: "",
    },
  ];
  return (
    <LayoutComp imgUrl={infoCenterImg}>
      <div className={infoStyle["info-center-wrapper"]}>
        {infoList.map((item: any) => {
          return <InfomationBar key={item.title} content={item} />;
        })}
      </div>
      <div className={infoStyle["pagination"]}></div>
    </LayoutComp>
  );
};

export default Home;
