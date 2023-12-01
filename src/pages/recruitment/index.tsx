/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import joinStyle from "./index.module.css";
import { LayoutComp, PaginationComp, TabHeader } from "@/components";
import {
  PositionDetail,
  SearchComp,
} from "../../components/recruitmentComponents";
import { store } from "@/store";
import { MOBILE_REG } from "@/utils/isMobileDevice";
import Metadata from "next/head";

import join_banner from "/public/images/pc/join/join-banner.png";
import join_banner_mb from "/public/images/mobile/join/join-banner.png";
import { IStatus } from "@/lib/type";

const JoinUs = () => {
  const pageSize = 5;
  const joinSlideList = {
    pc: [join_banner],
    mb: [join_banner_mb],
  };
  const [pageCurrent, setPageCurrent] = useState<number>(1);
  const [status, setStatus] = useState<IStatus>({
    keyword: "",
    type: -1,
    pos: -1,
  });

  const handleChange = async (value: IStatus) => {
    setStatus(value);
  };

  const [isMobile, setIsMobile] = useState(false);
  const state = store();

  useEffect(() => {
    state.getPosList();
    state.getTypeList();
  }, []);

  useEffect(() => {
    state.initData(status);
  }, [status]);

  useEffect(() => {
    const isMobile =
      !!navigator.userAgent.match(MOBILE_REG) ||
      window.matchMedia("only screen and (max-width: 500px)").matches;
    setIsMobile(isMobile);
  }, []);

  return (
    <div>
      <Metadata>
        <title>加入我们</title>
      </Metadata>
      <LayoutComp
        slideList={isMobile ? joinSlideList.mb : joinSlideList.pc}
        page="join"
      >
        <div
          className={`${joinStyle["wrapper"]} ${joinStyle["job-wrapper"]}`}
          id="pos"
        >
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
                  {state.total}
                </span>{" "}
                条记录
              </p>
            )}
            {state.jobList.map((item: any, index: number) => {
              return (
                <PositionDetail
                  count={state.jobList.length}
                  key={index}
                  index={index}
                  isMobile={isMobile}
                  jobDetail={item}
                />
              );
            })}
          </div>
        </div>

        <PaginationComp
          current={pageCurrent}
          size={pageSize}
          total={state.total}
          onChange={(value: number) => {
            setPageCurrent(value);
            state.handleChangePageIndex(value);
            const dom = document.getElementById("pos");
            dom && dom.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />

        <div className={joinStyle["wrapper"]}>
          <TabHeader h1="招聘简章" />
          <div className="wrapper-center">
            <h2 className={joinStyle["detail-title"]}>公司简介</h2>
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
            <h2 className={joinStyle["detail-title"]}>公司福利</h2>
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
            <h2 className={joinStyle["detail-title"]}>期待这样的你</h2>
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
    </div>
  );
};

export default JoinUs;
