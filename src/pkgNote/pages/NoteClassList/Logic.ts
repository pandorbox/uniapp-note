import BaseLogic, { Data as BaseData } from "@qjk/npm-pack/dist/core/base/BaseLogic";
import NetData from "./NData";

export class Data extends BaseData {
  /** options */
  type: string;
  constructor() {
    super();
    this.type = "";
    this.needLogin = true;
  }
}

/**
 * 逻辑
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
  /** 事件 */
  async onItem() {
    await this.router.openPage("noteDetail");
  }
}
