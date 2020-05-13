import BaseNetData, { NData, NParam } from "@qjk/npm-pack/dist/core/base/BaseNData";
import NetApi from "../../../_core/_api/index";
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
 * 添加笔记数据
 */
export default class NetData extends BaseNetData<Param> {
  data = new Data();
  param = new Param();
  Napi = new NetApi();
  constructor() {
    super();
  }
  async getNetData(param: NParam, logTag?: string): Promise<Data> {
    /**获取笔记类型 */
    const res = await this.request.call(this.Napi.Note.getNoteType());
    console.log(res);
    this.data.items = res;
    return this.data;
  }
}
