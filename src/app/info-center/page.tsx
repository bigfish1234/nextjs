"use client";
import InfomationBar from "@/components/InfomationBar";
import infoStyle from "./index.module.css";
import LayoutComp from "@/components/LayoutComp";
import infoCenterImg from "@/images/header/xinxzx.png";
import { Imgs } from "@/images/mobileImg";
import { isMobileDevice } from "@/utils/isMobileDevice";
import { Pagination } from "antd";
import { useState } from "react";
import PaginationComp from "@/components/PaginationComp";

const Home = () => {
  const isMobile = isMobileDevice();
  const infoListAll = [
    {
      time: "2023-8-18",
      title: "硕磐企业智能管理操作系统",
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
      title: "硕磐企业智能管理操作系统EIMOS3",
      description:
        "是硕磐智能基于自主知识产权开发，融合了大数据、知识图谱、人工智能算法、运筹规划算法、云原生等核心技术的 企业智能化管理操作系统，可满足制造业各行业复杂的智能决策、经营规则精益化、流程优化管理等需求，是把端到端的精益化管理思维注入到产品基因的一款智 能化数据平台。",
      imgUrl: "",
    },
    {
      time: "2023-8-18",
      title: "硕磐企业智能管理操作系统EIMOS4",
      description:
        "是硕磐智能基于自主知识产权开发，融合了大数据、知识图谱、人工智能算法、运筹规划算法、云原生等核心技术的 企业智能化管理操作系统，可满足制造业各行业复杂的智能决策、经营规则精益化、流程优化管理等需求，是把端到端的精益化管理思维注入到产品基因的一款智 能化数据平台。",
      imgUrl: "",
    },
    {
      time: "2023-8-18",
      title: "硕磐企业智能管理操作系统EIMOS5",
      description:
        "是硕磐智能基于自主知识产权开发，融合了大数据、知识图谱、人工智能算法、运筹规划算法、云原生等核心技术的 企业智能化管理操作系统，可满足制造业各行业复杂的智能决策、经营规则精益化、流程优化管理等需求，是把端到端的精益化管理思维注入到产品基因的一款智 能化数据平台。",
      imgUrl: "",
    },
    {
      time: "2023-8-18",
      title: "硕磐企业智能管理操作系统EIMOS6",
      description:
        "是硕磐智能基于自主知识产权开发，融合了大数据、知识图谱、人工智能算法、运筹规划算法、云原生等核心技术的 企业智能化管理操作系统，可满足制造业各行业复杂的智能决策、经营规则精益化、流程优化管理等需求，是把端到端的精益化管理思维注入到产品基因的一款智 能化数据平台。",
      imgUrl: "",
    },
    {
      time: "2023-8-18",
      title: "硕磐企业智能管理操作系统EIMOS7",
      description:
        "是硕磐智能基于自主知识产权开发，融合了大数据、知识图谱、人工智能算法、运筹规划算法、云原生等核心技术的 企业智能化管理操作系统，可满足制造业各行业复杂的智能决策、经营规则精益化、流程优化管理等需求，是把端到端的精益化管理思维注入到产品基因的一款智 能化数据平台。",
      imgUrl: "",
    },
    {
      time: "2023-8-18",
      title: "硕磐企业智能管理操作系统EIMOS8",
      description:
        "是硕磐智能基于自主知识产权开发，融合了大数据、知识图谱、人工智能算法、运筹规划算法、云原生等核心技术的 企业智能化管理操作系统，可满足制造业各行业复杂的智能决策、经营规则精益化、流程优化管理等需求，是把端到端的精益化管理思维注入到产品基因的一款智 能化数据平台。",
      imgUrl: "",
    },
    {
      time: "2023-8-18",
      title: "硕磐企业智能管理操作系统EIMOS9",
      description:
        "是硕磐智能基于自主知识产权开发，融合了大数据、知识图谱、人工智能算法、运筹规划算法、云原生等核心技术的 企业智能化管理操作系统，可满足制造业各行业复杂的智能决策、经营规则精益化、流程优化管理等需求，是把端到端的精益化管理思维注入到产品基因的一款智 能化数据平台。",
      imgUrl: "",
    },
  ];
  const pageSize = 5;
  const [pageCurrent, setPageCurrent] = useState<number>(1);
  const [infoList, setInfoList] = useState([...infoListAll].slice(0, pageSize));
  const [total, setTotal] = useState<number>(infoListAll.length);
  const infoSlideList = {
    pc: [infoCenterImg],
    mb: [Imgs.infoCenter],
  };
  return (
    <main>
      <LayoutComp
        slideList={isMobile ? infoSlideList.mb : infoSlideList.pc}
        page="info"
      >
        <div className={isMobile ? "" : "wrapper-center"} id="top">
          {infoList.map((item: any) => {
            return (
              <InfomationBar
                key={item.title}
                content={item}
                isMobile={isMobile}
              />
            );
          })}
        </div>
        {!isMobile && (
          <PaginationComp
            page="info"
            current={pageCurrent}
            size={pageSize}
            total={total}
            onChange={(value: number) => {
              setPageCurrent(value);
              setInfoList(
                [...infoListAll].slice(pageSize * (value - 1), pageSize * value)
              );
              const dom = document.getElementById("top");
              dom && dom.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          />
        )}
      </LayoutComp>
    </main>
  );
};

export default Home;
