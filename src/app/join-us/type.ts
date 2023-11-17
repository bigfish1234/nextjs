export interface IStatus {
  /** 招聘类型 */
  type: string | undefined;
  /** 招聘的职位 */
  pos: string | undefined;
  keyword: string;
}

export interface JobListType {
  // 招聘职位
  jobName: string;
  id: number;
  // 招聘人数
  num: number;
  // 标记社会/校园招聘
  type: number;
  // 要求能力
  abilities: string[];
}
