import BaseLogic, { Data as BaseData } from "@/core/base/BaseLogic";
import NetData from "./NData";
import User from "@/core/item/userInfo";

export class Data extends BaseData {
  /** web */
  web: boolean;
  constructor() {
    super();
    this.needLogin = true;
    this.web = false;
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
    if (this.platform.platform == "web") {
      this.data.web = true;
    }
    await this.netData.getNetData(this.param);
    await this.refreshData(this.netData.data);
  }
  // 页面跳转
  async onTurn() {
    await this.page.openPage("pageOne");
  }
  async onLogin() {
    await this.page.openPage("login");
  }
  async onRegiste() {
    await this.page.openPage("registe");
  }
  async onOut() {
    await this.storage.removeUser();
    this.data.user = new User();
  }
  async onItem() {
    await this.page.openPage("noteDetail");
  }
}
