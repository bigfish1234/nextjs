"use client";

import styles from "./index.module.css";
import { Upload } from "../components";
import { FooterComp } from "@/components";
import NavgatorComp from "@/components/SwiperHeader/effects/NavgatorComp";
import { useState } from "react";
import { store } from "@/store";

const JobDetail = () => {
  const [isApply, setIsApply] = useState(false);
  const state = store();

  const applyJob = () => {
    setIsApply(true);
  };
  return (
    <div>
      <NavgatorComp page="detail" />
      <div
        className={
          state.isMobile ? styles["job-detail-wrapper_mb"] : "wrapper-center"
        }
      >
        <div className={styles["job"]}>
          <p className={styles["job-position"]}>SAAS产品总监(1名)</p>
          {state.isMobile ? (
            <div className={styles["job-position_mobile"]}>
              <p>薪资: 70K-100K/月</p>
              <p>(其它福利：五险一金+双休+餐补+交通补贴等)</p>
            </div>
          ) : (
            <div className={styles["job-position_pc"]}>
              <span>薪资: 70K-100K/月</span>
              <span style={{ fontSize: 22 }}>
                (其它福利：五险一金+双休+餐补+交通补贴等）
              </span>
            </div>
          )}
          {!state.isMobile && (
            <div className={styles["apply-btn"]} onClick={applyJob}>
              申请职位
            </div>
          )}
        </div>
        <div className={styles["title"]}>岗位职责</div>
        <div className={styles["job-detail"]}>
          <p>
            1.
            负责本领域商业产品和技术方向的演进，研究业界本领域的发展方向、先进技术、工具和IT平台等；
          </p>
          <p>
            2.
            制定本领域的SAAS产品业务规划或应用架构，确保架构成功在产品中落地；
          </p>
          <p>3. 负责本领域的业务架构设计和应用产品规划与建设工作；</p>
          <p>
            4.
            主导输出本领域业务解决方案或IT解决方案，以及与解决方案配套的详细需求规格和原型；
          </p>
          <p>5. 负责完成本领域的应用产品运营。</p>
        </div>

        <div className={styles["title"]}>岗位要求</div>
        <div className={styles["job-detail"]}>
          <p>1. 7年以上相关工作经验；</p>
          <p>
            2.
            具有互联网或高科技企业工作经验，具备结构化思维能力和较强的学习能力：
          </p>
          <p style={{ paddingLeft: 20 }}>
            a)
            从事过多年的企业（制造业优先）IT产品建设或者架构或解决方案设计工作；
          </p>
          <p style={{ paddingLeft: 20 }}>
            b)
            在知名专业咨询机构或者大型企业从事多年相关领域的业务咨询工作或者精通相关业务领域业务知识的一个或者多个(领域包含LTC/ISC/ISD/FIN/MBS/大数据/办公/知识产品/搜索等)。
          </p>
          <p>
            3.
            带领过所在企业业务团队或者主导过所在企业在相应领域的IT产品构建工作；
          </p>
          <p>4. 有成功的产品管理、架构设计、解决方案设计、项目管理实践经验；</p>
          <p>
            5.
            熟练掌握业界通用和最新软件包Oracle/SAP/Salesforce以及国内主流企业信息系统软件等；
          </p>
          <p>6. 具备丰富知识管理相关业务规划、解决方案设计、需求分析经验；</p>
          <p>
            7.
            了解IT架构规划、移动应用、微服务、云原生、软件包（Salesforc,Swift等）、数据管理、DW&BI等领域知识。
          </p>
        </div>

        <div className={styles["job-detail"]} style={{ border: 0 }}>
          <p>
            简历可以投递至邮箱：
            <span style={{ color: "#F96F25" }}>zhaopin@boulderaitech.com</span>
            或者
            <span style={{ color: "#F96F25" }}>
              zhoucancan@boulderaitech.com
            </span>
          </p>
          <p>联系电话：0571-83580606、18906719756</p>
          <p>公司地址：杭州市萧山区永辉路548号17楼</p>
        </div>
      </div>
      {isApply && <Upload open={isApply} setIsApply={setIsApply} />}
      <FooterComp />
    </div>
  );
};

export default JobDetail;
