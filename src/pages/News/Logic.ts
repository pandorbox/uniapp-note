import BaseLogic, { Data as BaseData } from "@/core/base/BaseLogic";
import NetData from "./NData";

export class Data extends BaseData {
  /** 选中one */
  chooseOne: Array<any>;
  /** 选中two */
  chooseTwo: Array<any>;
  /** 选中项tab */
  tab: Number;
  constructor() {
    super();
    this.needLogin = true;
    this.chooseOne = [];
    this.chooseTwo = [];
    this.tab = 0;
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
  async onItem(param: any) {
    let res = await this.netData.getMyMsg();
  }
  async onChooseOne(param: any) {
    console.log(param);
    this.data.chooseOne = param.arr;
    this.data.tab = param.tab;
  }
  async onDel() {
    this.toast.modal("提示", "确认删除选中项");
  }
}
