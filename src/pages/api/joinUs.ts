import { NextApiResponse, NextApiRequest } from 'next'
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const querys  = req?.query;
  // todo 拿到type 和 pos去数据库匹配
  const result  = { status: true, id: '1111' }; // 处理结果
  console.log('test----->, querys, ----->', querys);

  // 操作完数据库，返回请求
  if(!result.status){
    return res.status(500);
  }
  return res.status(200).json(jobListAll);
}