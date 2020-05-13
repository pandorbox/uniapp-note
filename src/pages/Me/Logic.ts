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
  async onItem(param: any) {
    let user = await this.storage.mpgetUser();
    if (this.data.user.name) return;
    let res = await this.toast.modal("提示", "是否去登录");
    if (!res) return;
    this.router.openPage("pkgAccount_login");
  }
}
