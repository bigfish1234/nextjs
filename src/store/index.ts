import Store from "zustand-store";

class globalStore extends Store.BaseStore<globalStore> {
  public page = "eimos";
  public plan = "IBA";

  public onPageChange(type: string) {
    this.set((state) => {
      state.page = type;
    });
  }

  public onPlanChange(type: string) {
    this.set((state) => {
      state.plan = type;
    });
  }
}
export const store = Store.create(globalStore);
