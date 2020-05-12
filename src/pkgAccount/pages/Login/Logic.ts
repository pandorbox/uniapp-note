import BaseLogic, { Data as BaseData } from "@qjk/npm-pack/dist/core/base/BaseLogic";
import NetData from "./NData";

export class Data extends BaseData {
  /** 登录账号 */
  account: string;
  /** 登录密码 */
  password: string;
  /** text */
  text: any;
  constructor() {
    super();
    this.needLogin = true;
    this.account = "";
    this.password = "";
    this.text = "text";
  }
}

/**
 * 登录逻辑
 */
export default class Logic extends BaseLogic {
  data = new Data();
  netData = new NetData();
  constructor() {
    super();
  }
  async onBeingCreated() {
    await this.netData.getNetData(this.param);
    await this.refreshData();
  }
  /** input输入事件 */
  async onInput(form: any) {
    this.data.account = form.account;
    this.data.password = form.password;
  }
  /** 登录提交 */
  async onSubmit() {
    const res = await this.netData.login({
      account: this.data.account,
      password: this.data.password
    });
    if (!res) return;
    if (this.platform.platform == "mp") {
      await this.storage.mpremoveUser();
      await this.storage.mpsetUser(res);
    } else {
      await this.storage.removeUser();
      await this.storage.setUser(res);
    }
    this.data.text = res.name;
    await this.refreshData();
    await this.toast.open("登录成功", "success");
    let that = this;
    let openpage = function() {
      that.router.openTab("tab_Home");
    };
    setTimeout(openpage, 600);
  }
}
