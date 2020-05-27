import BaseNetData, { NData, NParam } from "@qjk/npm-pack/dist/core/base/BaseNData";

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
 * 我的数据
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
}
