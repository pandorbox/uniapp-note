import BaseLogic, { Data as BaseData } from "@qjk/npm-pack/dist/core/base/BaseLogic";
import NetData from "./NData";

export class Data extends BaseData {
  /** 注册账号 */
  account: string;
  /**注册密码 */
  password: string;
  /**注册二次密码 */
  passwords: string;
  constructor() {
    super();
    this.needLogin = false;
    this.account = "";
    this.password = "";
    this.passwords = "";
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
  /** input输入事件 */
  async onInput(form: any) {
    this.data.account = form.account;
    this.data.password = form.password;
    this.data.passwords = form.passwords;
  }
  /** 注册提交 */
  async onSubmit() {
    let res: any;
    if (this.data.password !== this.data.passwords) {
      await this.toast.open("两次密码不一致", "none");
      return;
    }
    res = await this.netData.register({
      account: this.data.account,
      password: this.data.password
    });
    console.log("res", res);
    if (!res) return;
    await this.toast.open("注册成功");
    let that = this;
    let openpage = function() {
      that.router.openPage("pkgAccount_login");
    };
    setTimeout(openpage, 600);
    // this.closeOpen("login");
  }
}
