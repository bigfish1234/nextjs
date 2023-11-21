import { getJobType, getJobs, getPositionList } from "@/utils/api";
import { isMobileDevice } from "@/utils/isMobileDevice";
import Store from "zustand-store";

class globalStore extends Store.BaseStore<globalStore> {
  public plan = "IBA";
  public link = "ei";
  public isExpand = false;
  public isOpen = false;
  public nav = "eimos";
  public isMobile = isMobileDevice();
  public typeList = [];
  public posList = [];
  public jobList: any = [];
  public jobListAll = [];
  public total = 0;

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
