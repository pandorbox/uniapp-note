import BaseLogic, { Data as BaseData } from "@/core/base/BaseLogic";
import NetData from "./NData";
import UserInfo from "@/core/item/userInfo";
import User from "@/core/item/userInfo";

export class Data extends BaseData {
  /** 登录账号 */
  account: string;
  /** 登录密码 */
  password: string;
  constructor() {
    super();
    this.needLogin = true;
    this.account = "";
    this.password = "";
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
    await this.refreshData(this.netData.data);
  }
  /** input输入事件 */
  async onInput(form: any) {
    this.data.account = form.account;
    this.data.password = form.password;
  }
  /** 登录提交 */
  async onSubmit() {
    let res: any;
    res = await this.netData.login({
      account: this.data.account,
      password: this.data.password
    });
    if (res !== 1) {
      await this.toast.open(res.msg, "none");
      await this.toast.close(500);
    } else {
      let userinfo = await this.netData.getUser(this.data.account);
      console.log("userInfo:", userinfo);
      await this.storage.removeUser();
      await this.storage.setUser(userinfo);
      await this.toast.open("登录成功", "success");
      let that = this;
      let openpage = function() {
        that.page.openTab("tab_Home");
      };
      setTimeout(openpage, 600);
    }
  }
}
