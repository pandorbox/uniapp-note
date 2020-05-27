import BaseNetData, { NData, NParam } from "@qjk/npm-pack/dist/core/base/BaseNData";
import Napi from "../../_core/_api/index";
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
  nApi = new Napi();
  constructor() {
    super();
  }
  async getNetData(param: NParam, logTag?: string): Promise<Data> {
    const res = await this.request.call(this.nApi.Note.getNoteType());
    return this.data;
  }
  /** 获取我的信息 */
  async getMyMsg() {
    const res = await this.request.call(this.api.Account.getUserInfo());
    this.data.getMsg = this.covitem(res);
  }
  /** 我的信息数据转换 */
  covitem(res: any): Array<Typeitem> {
    let data: Array<Typeitem> = [];
    let item = new Typeitem();
    res.forEach((ritem: any) => {
      item.value1 = ritem.notictit || "";
      item.value2 = ritem.noticmsg || "";
      data.push(item);
    });
    return data;
  }
}
