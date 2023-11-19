import { useState } from "react";
import { message } from "antd";
import { isMobileDevice } from "@/utils/isMobileDevice";
import { IStatus, JobListType } from "../type";
import { getJobs } from "@/utils/api";

import join_banner from "/public/pc/join/join-banner.png";
import join_banner_mb from "/public/mobile/join/join-banner.png";

const useJoinEvent = () => {
  const pageSize = 5;
  const isMobile = isMobileDevice();
  const joinSlideList = {
    pc: [join_banner],
    mb: [join_banner_mb],
  };
  const [pageCurrent, setPageCurrent] = useState<number>(1);
  const [jobListAll, setJobListAll] = useState<JobListType[]>([]);
  const [jobList, setJobList] = useState<JobListType[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [status, setStatus] = useState<IStatus>({
    type: undefined,
    pos: undefined,
    keyword: "",
  });

  const initData = async (params: IStatus) => {
    // 传入职位和状态  初始化的时候为空
    try {
      const res = await getJobs(params);
      setJobListAll(res.list);
      setTotal(res.list.length);
      setJobList([...res.list].slice(0, pageSize));
    } catch (error) {
      message.error("获取职位失败");
      console.log("error", error);
    }
  };

  const handleChange = async (value: IStatus) => {
    setStatus(value);
  };
  return {
    pageSize,
    isMobile,
    joinSlideList,
    pageCurrent,
    setPageCurrent,
    jobListAll,
    jobList,
    setJobList,
    total,
    status,
    setStatus,
    initData,
    handleChange,
  };
};
export default useJoinEvent;
