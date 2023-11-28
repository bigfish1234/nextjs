import {
  getJobDetail,
  getJobType,
  getJobs,
  getPositionList,
} from "@/server/api";
import Store from "zustand-store";
import { IJobType } from "../server/type";
import moment from "moment";

class globalStore extends Store.BaseStore<globalStore> {
  public plan = "IBA";
  public link = "ei";
  public isExpand = false;
  public isOpen = false;
  public nav = "eimos";
  public typeList = [];
  public posList = [];
  public jobList: IJobType[] = [];
  public jobListAll: IJobType[] = [];
  public total = 0;
  public jobDetail: any = {};

  // 初始化数据
  public initData = async (params: any) => {
    // 传入职位和状态  初始化的时候为空
    const res = await getJobs(params);
    this.set((state) => {
      state.jobListAll = res.data;
      state.jobList = [...res.data].slice(0, 5);
      state.total = res.data.length;
    });
  };

  // 获取招聘类型下拉列表
  public getTypeList = async () => {
    const res = await getJobType();
    this.set((state) => {
      state.typeList = res.data.map((item: any) => ({
        value: item.type,
        label: item.value,
      }));
    });
  };

  // 获取招聘职位下拉列表
  public getPosList = async () => {
    const res = await getPositionList();
    this.set((state) => {
      state.posList = res.data.map((item: any) => ({
        value: item.jobid,
        label: item.jobName,
      }));
    });
  };

  // 获取职位详情
  public queryJobDetail = async (id: number) => {
    const res = await getJobDetail(id);
    this.set((state) => {
      state.jobDetail = res.data;
    });
  };

  public handleChangePageIndex = (index: number) => {
    this.set((state) => {
      state.jobList = state.jobListAll.slice(5 * (index - 1), 5 * index);
    });
  };

  public onPlanChange(type: string) {
    this.set((state) => {
      state.plan = type;
    });
  }

  public onLinkChange(type: string) {
    this.set((state) => {
      state.link = type;
    });
  }
  public handleExpandChange(value: boolean) {
    this.set((state) => {
      state.isExpand = value;
    });
  }
  public handleOpenChange(value: boolean) {
    this.set((state) => {
      state.isOpen = value;
    });
  }

  public handleNavChange(value: string) {
    this.set((state) => {
      state.nav = value;
    });
  }
}
export const store = Store.create(globalStore);
