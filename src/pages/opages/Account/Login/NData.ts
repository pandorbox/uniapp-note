import BaseNetData, { NData, NParam } from "@/core/base/BaseNData";
import UserInfo from "@/core/item/userInfo";

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
    const res = await this.call.Api(
      this.api.Account.login({
        username: param.account,
        userpwd: param.password
      })
    );
    return res;
  }
  /** 获取用户信息 */
  async getUser(username: string) {
    const res = await this.call.Api(
      this.api.Account.userMsg({
        username: username
      })
    );
    return this.covUser(res);
  }
  covUser(res: any): UserInfo {
    let data: Array<UserInfo> = [];
    let item = new UserInfo();
    res.forEach((ritem: any) => {
      (item.name = ritem.username), (item.photo = ritem.userimg);
      data.push(item);
    });
    return data[0];
  }
}
