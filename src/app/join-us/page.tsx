"use client";
import LayoutComp from "@/components/LayoutComp";
import joinImg from "@/images/header/jiarwm.png";
import joinStyle from "./index.module.css";
import TabHeader from "@/components/TabHearder";
import SearchComp from "./components/SearchComp";
import { Imgs } from "@/images/mobileImg";
import { isMobileDevice } from "@/utils/isMobileDevice";
import PositionDetail from "./components/PositionDetail";
import { useState } from "react";

const JoinUs = () => {
  const isMobile = isMobileDevice();
  const joinSlideList = {
    pc: [joinImg],
    mb: [Imgs.join],
  };

  const jobListAll = [
    {
      jobName: "SAAS产品总监",
      id: 0,
      num: 1,
      type: 0,
      abilities: [
        "负责本领域商业产品和技术方向的演进，研究业界本领域的发展方向、先进技术、工具和IT平台等；",
        "制定本领域的SAAS产品业务规划或应用架构，确保架构成功在产品中落地；",
        "负责本领域的业务架构设计和应用产品规划与建设工作；",
      ],
    },
    {
      jobName: "数据治理产品经理",
      id: 1,
      num: 1,
      type: 0,
      abilities: [
        "构建数据治理体系及数据质量框架，牵头完成数据治理实施方案的制定及落地，负责相关技术文档的输出；",
        "负责业务数据梳理及优化，形成数据质量标准和分级分类管理方法；",
        "深入理解行业数据，结合数据的技术特点设计数据模型；",
      ],
    },
    {
      jobName: "安全总监",
      id: 2,
      num: 1,
      type: 0,
      abilities: [
        "负责公司信息安全业务战略规划及新技术领域安全规划工作，搭建公司信息安全整体框架和体系、安全运营事件应急响应机制建设，保障安全问题能够及时有效得到解决；",
        "全面负责产品和服务的安全合规工作，制定产品和服务的实现国家安全等保三级的工作计划和实施方案，组织和协调研发团队落实实施；同时，负责组织协调产品和服务的国家安全等保三级的审批工作；",
        "负责公司日常安全事务，组织对公司各方面人员进行安全技术培训，提高团队安全知识和能力。",
      ],
    },
    {
      jobName: "前端工程师",
      id: 3,
      num: 5,
      type: 1,
      abilities: [
        "负责公司产品的开发，持续提升用户体验，优化页面交互操作流程；",
        "前端框架、组件库搭建，并持续对项目进行插件化和组件化改进；",
        "协同研究前端组件的开发工作，并能够独立完成前端组件开发；",
      ],
    },
  ];

  const [jobList, setJobList] = useState([...jobListAll]);
  const [status, setStatus] = useState<any>({
    type: undefined,
    pos: undefined,
  });

  const handleChange = (value: any) => {
    const { type, pos } = value;
    const filterData = [...jobListAll].filter((item: any) => {
      if (type !== undefined) {
        if (pos !== undefined) {
          return item.type == type && item.id == pos;
        } else {
          return item.type == type;
        }
      } else {
        if (pos !== undefined) {
          return item.id == pos;
        } else {
          return true;
        }
      }
    });
    setJobList(filterData);
  };
  return (
    <main>
      <LayoutComp
        slideList={isMobile ? joinSlideList.mb : joinSlideList.pc}
        page="join"
      >
        <div className={`${joinStyle["wrapper"]} ${joinStyle["job-wrapper"]}`}>
          {!isMobile && <TabHeader h1="招聘职位" />}
          <div className="wrapper-center">
            <SearchComp
              isMobile={isMobile}
              handleChange={handleChange}
              status={status}
              setStatus={setStatus}
            />
            {!isMobile && (
              <p>
                共{" "}
                <span
                  style={{
                    color: "#F96F25",
                    display: "inline-block",
                    paddingBottom: 10,
                    fontSize: 14,
                  }}
                >
                  {jobList.length}
                </span>{" "}
                条记录
              </p>
            )}
            {jobList.map((item: any, index: number) => {
              return (
                <PositionDetail
                  key={index}
                  isMobile={isMobile}
                  jobDetail={item}
                />
              );
            })}
          </div>
        </div>
        <div className={joinStyle["wrapper"]}>
          <TabHeader h1="招聘简章" />
          <div className="wrapper-center">
            <span className={joinStyle["detail-title"]}>公司简介</span>
            <div className={joinStyle["detail"]}>
              <p>
                杭州硕磐智能科技致力于构建新一代云原生数据分析平台和企业管理系统，助力制造业企业的数字化转型；并通过打造智能化产业互联网，为政府数字化运营和企业数字化管理提供数据平台和解决方案的新型高科技企业。
                公司创始合伙人均来自全球顶级公司核心管理团队，曾负责大型企业的经营管理和研发，在产业和互联网两大领域都有丰富的经验。
              </p>
              <p>
                公司核心产品EIMOS (Enterprise Intelligent Management Operating
                System)，是硕磐智能基于自主知识产权开发，融合了大数据、知识图谱、人工智能算法、运筹规划算法、云原生等核心技术的企业智能化管理操作系统，可满足制造业各行业复杂的辅助决策、经营规则精益化、流程优化管理等需求，是把端到端的精益化管理思维注入到产品基因的一款智能化数据平台。
              </p>
              <p>
                公司的发展规划和核心产品建设，积极配合国家的数字化改革和转型，为企业效益提升和管理升级赋能；因此，公司已获得政府多项政策支持包括资金支持，并成为杭州萧山区专项引进的高科技公司；其核心产品收到多个行业的众多企业的欢迎和好评，签署多个合作开发和应用协议；同时，公司及其核心产品吸引了很多实力雄厚的基金关注和投资意愿，公司将根据其发展规划进行融资。
              </p>
              <p>
                并且，公司开始快速发展，已吸引了众多尖端人才的加入，包括多名留美和985名校博士，硕士以上学历占比超过50%，本科以上学历占100%。公司以人才为本，重视人才，并大力度激励人才和奖励贡献，现诚邀各方英才加入。
              </p>
            </div>
            <span className={joinStyle["detail-title"]}>公司福利</span>
            <div className={joinStyle["detail"]}>
              <p>
                1)
                与优秀的行业专家和研究人员共同成长。我们的团队来自华为、阿里、Microsoft、Cisco等；
              </p>
              <p>
                2)
                独一无二的业务机会。有机会和我们的小伙伴一起接触到国内外最前沿的技术和项目实现，成为下一代数字科技的拓疆者；
              </p>
              <p>3) 高于行业平均水平的薪资福利，股票期权等等。</p>
            </div>
            <span className={joinStyle["detail-title"]}>期待这样的你</span>
            <div className={joinStyle["detail"]}>
              <p>
                1)
                有擅长或者痴迷的领域——人工智能，运筹学算法、数据分析、大数据平台、SaaS平台、云平台
                等等；
              </p>
              <p>
                2)
                视成长与进步为快乐之源——我们期望（也会帮助）你成为一个“工程师+科学家”，不仅在你喜欢的领域有所建树，更能成为全能型选手；
              </p>
              <p>
                3)
                勇于挑战，不怕犯错——能够在一个创新的start-up环境中工作，推动产品的创新；
              </p>
              <p>4) 快乐阳光，对生活充满好奇；</p>
              <p>5) 致力于为这个时代创造价值。</p>
            </div>
          </div>
        </div>
      </LayoutComp>
    </main>
  );
};

export default JoinUs;
