import BaseLogic, { Data as BaseData } from "@qjk/npm-pack/dist/core/base/BaseLogic";
import NetData from "./NData";

export class Data extends BaseData {
  constructor() {
    super();
    this.needLogin = true;
  }
}

/**
 * 首页逻辑
 */
export default class Logic extends BaseLogic {
  data = new Data();
  netData = new NetData();
  constructor() {
    super();
  }
  async onBeingCreated() {
    await this.netData.getNetData(this.param);
    await this.refreshData(this.netData.data);
  }
  /** 跳转到新增笔记 */
  async onAdd() {
    console.log(this.page);

    await this.page.openPage("addNote");
  }
  /** 点击item  */
  async onItems(param: any) {
    let id = param.id;
    await this.page.openPage("noteDetail", { id: id });
  }
}
