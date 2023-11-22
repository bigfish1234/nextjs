"use client";

import styles from "./index.module.css";
import { Upload } from "../components";
import { FooterComp } from "@/components";
import NavgatorComp from "@/components/SwiperHeader/effects/NavgatorComp";
import { useEffect, useState } from "react";
import { store } from "@/store";

const JobDetail = () => {
  const [isApply, setIsApply] = useState(false);
  const state = store();

  const applyJob = () => {
    setIsApply(true);
  };

  useEffect(() => {
    const url = new URL(location.href);
    const id = Number(url.searchParams.get("id"));
    state.queryJobDetail(id);
  }, []);

  return (
    <div>
      <NavgatorComp page="detail" />
      <div
        className={
          state.isMobile ? styles["job-detail-wrapper_mb"] : "wrapper-center"
        }
      >
        <div className={styles["job"]}>
          <p className={styles["job-position"]}>
            {state.jobDetail.jobName}({state.jobDetail.num}名)
          </p>
          {state.isMobile ? (
            <div className={styles["job-position_mobile"]}>
              <p>薪资: {state.jobDetail.salary}/月</p>
              <p>(其它福利：五险一金+双休+餐补+交通补贴等)</p>
            </div>
          ) : (
            <div className={styles["job-position_pc"]}>
              <span>薪资: {state.jobDetail.salary}/月</span>
              <span style={{ fontSize: 22, paddingLeft: 20 }}>
                (其它福利：五险一金+双休+餐补+交通补贴等)
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
        <div
          className={styles["job-detail"]}
          dangerouslySetInnerHTML={{ __html: state.jobDetail.intro }}
        ></div>

        <div className={styles["title"]}>岗位要求</div>
        <div
          className={styles["job-detail"]}
          dangerouslySetInnerHTML={{ __html: state.jobDetail.require }}
        ></div>

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
