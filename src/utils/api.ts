import axios from "axios";
import { IStatus } from "@/app/join-us/type";
import { message } from "antd";

// 获取所有职位信息
export const getJobs = async (params: IStatus) => {
  const res = await axios.post("/api/getJobList", {
    ...params,
  });
  if (res.status !== 200) {
    return Promise.reject();
  }
  return Promise.resolve(res.data);
};

export const getJobDetail = async (id: number) => {
  const res = await axios.post("/api/getJobDetail", { id });
  if (res.status !== 200) {
    return Promise.reject();
  }
  return Promise.resolve(res.data);
};

// 提交咨询表单
export const contactUs = (params: any) => {
  return axios
    .post("/api/submit", { ...params })
    .then(() => {
      message.success("提交成功");
    })
    .catch(() => {
      message.error("提交失败");
    });
};

// 获取招聘类型下拉列表
export const getJobType = async () => {
  const res = await axios.get("/api/jobType");
  if (res.status !== 200) {
    return Promise.reject();
  }
  return Promise.resolve(res.data);
};

// 获取招聘职位下拉列表
export const getPositionList = async () => {
  const res = await axios.get("/api/getPosition");
  if (res.status !== 200) {
    return Promise.reject();
  }
  return Promise.resolve(res.data);
};

// 发送邮箱
export const handleSendEmail = async (data: any) => {
  await axios.post("/api/sendEmail", { ...data });
};
