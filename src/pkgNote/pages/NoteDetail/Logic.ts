import BaseLogic, { Data as BaseData } from "@qjk/npm-pack/dist/core/base/BaseLogic";
import NetData from "./NData";

export class Data extends BaseData {
  /** 评论蒙层 */
  reply: boolean;
  constructor() {
    super();
    this.reply = false;
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
  async onItem(param: any) {
    let res = await this.netData.getMyMsg();
  }
  async onReply() {
    this.data.reply = true;
  }
  async onClose() {
    this.data.reply = false;
  }
}
