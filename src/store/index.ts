import Store from "zustand-store";

class globalStore extends Store.BaseStore<globalStore> {
  public page = "eimos";
  public plan = "IBA";
  public link = "ei";
  public isOpen = false;

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

  public onLinkChange(type: string) {
    this.set((state) => {
      state.link = type;
    });
  }
  public handleOpenChange(value: boolean) {
    this.set((state) => {
      state.isOpen = value;
    });
  }
}
export const store = Store.create(globalStore);
