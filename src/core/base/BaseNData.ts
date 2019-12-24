import Vue from "vue";
import Call from "@/core/request/Request";
import ApiTo from "@/core/api/index";
/** 参数 */
export class NParam {
  /** id */
  id?: string;
  /** 参数组 */
  param?: object;
}
/** 数据 */
export class NData {
  /** 需要登录 */
  needLogin: boolean;
  /** 首次加载获取数据 */
  items: any;
  constructor() {
    this.needLogin = false;
  }
}
/**
 * 基础数据
 */
export default class BaseNData<p extends NParam> {
  data: NData;
  call: Call;
  api: ApiTo;
  constructor() {
    this.data = new NData();
    this.call = new Call();
    this.api = new ApiTo();
  }
  /**
   * 获取初始数据
   * @param param 参数
   * @param logTag 日志标记
   */
  async getNetData(param?: p, logTag?: string): Promise<NData> {
    return this.data;
  }
  /**
   * 数据转换
   * @param result 数据
   */
  protected convert(result: any): NData {
    let data: NData;
    data = new NData();
    return data;
  }
}
