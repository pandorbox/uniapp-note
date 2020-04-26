import Request from "../request/RequestConfig";
/**
 * 单实例配置类
 */
export default class SingleConfig {
  /** 实例 */
  static readonly Instance: SingleConfig = new SingleConfig();
  /**
   * 系统
   */
  readonly System: {
    /** 版本号 */
    version: string /** 是否是开发版 */;
    routeData: { [key: string]: any } /** Web配置 */;
    request: Request;
  };

  // 将 constructor 设为私有属性，防止 new 调用
  private constructor() {
    this.System = {
      version: "v1",
      routeData: {},
      request: new Request()
    };
  }
  /**
   * 初始化
   */
  init() {}
}
