import BaseNetData, { NData, NParam } from "@qjk/npm-pack/dist/core/base/BaseNData";
export class Typeitem {
  value1: string;
  value2: string;
  constructor() {
    this.value1 = "";
    this.value2 = "";
  }
}
export class Param extends NParam {
  constructor() {
    super();
  }
}
export class Data extends NData {
  /** 获取信息 */
  getMsg: Array<Typeitem>;
  constructor() {
    super();
    this.getMsg = [];
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
   * 注册
   * @param param  account:账号 password:密码
   */
  async register(param: { account: string; password: string }) {
    const res = this.request.call(
      this.api.Account.register({
        username: param.account,
        userpwd: param.password
      })
    );
    return res;
  }
}
