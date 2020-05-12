import BaseNetData, { NData, NParam } from "@qjk/npm-pack/dist/core/base/BaseNData";
import UserInfo from "@qjk/npm-pack/dist/core/item/userInfo";

export class Param extends NParam {
  constructor() {
    super();
  }
}
export class Data extends NData {
  constructor() {
    super();
  }
}

/**
 * 首页数据
 */
export default class NetData extends BaseNetData<Param> {
  data = new Data();
  param = new Param();
  constructor() {
    super();
  }
  async getNetData(param: NParam, logTag?: string): Promise<Data> {
    return this.data;
  }
  /**
   * 登录
   * @param param  account:账号 password:密码
   */
  async login(param: { account: string; password: string }) {
    const res = await this.request.call(
      this.api.Account.login({
        username: param.account,
        userpwd: param.password
      })
    );
    return this.covUser(res);
  }
  covUser(res: any): UserInfo {
    let item = new UserInfo();
    item.name = res.userName;
    item.photo = res.userPhoto;
    return item;
  }
}
