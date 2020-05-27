import BaseLogic, { Data as BaseData } from "@qjk/npm-pack/dist/core/base/BaseLogic";
import NetData from "./NData";
import User from "@qjk/npm-pack/dist/core/item/userInfo";

export class Data extends BaseData {
  /** web */
  web: boolean;
  constructor() {
    super();
    this.needLogin = false;
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
    await this.refreshData();
  }
  // 页面跳转
  async onTurn() {
    await this.router.openPage("pageOne");
  }
  async onLogin() {
    await this.router.openPage("pkgAccount_login");
  }
  async onRegiste() {
    await this.router.openPage("pkgAccount_registe");
  }
  async onOut() {
    await this.storage.removeData("account");
    this.data.user = new User();
  }
  async onItem() {
    await this.router.openPage("noteDetail");
  }
  async onNav(param: any) {
    await this.router.openPage("noteClassList", { navtit: param });
  }
}
