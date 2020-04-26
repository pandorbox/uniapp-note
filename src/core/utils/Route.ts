import Storage from "./Storage";
import Platform from "./Platform";
import SingleConfig from "../config/SingleConfig";

/**
 * 路由
 */
export default class Route {
  /** 数据存储 */
  storage: Storage;
  /** 平台 */
  platform: Platform;
  constructor() {
    this.storage = new Storage();
    this.platform = new Platform();
  }
  /**
   * 保留当前页面，跳转到指定页面
   * @param name
   * @param params
   * @param closePage 是否关闭本页
   */
  async openPage(name: string, param?: any, closePage?: boolean) {
    if (!name) return;
    const { System } = SingleConfig.Instance;
    if (!System.routeData || !System.routeData[name]) return;
    let path: any = System.routeData[name];
    let url = "";
    if (path.tit !== "") {
      url = "/" + path.url + "?" + this.ParamUtils(param) + "&navtit=" + path.tit;
    } else {
      url = "/" + path.url + "?" + this.ParamUtils(param);
    }
    if (closePage) {
      uni.redirectTo({ url });
    } else {
      uni.navigateTo({ url });
    }
  }
  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
   * @param name
   * @param params
   */
  async openTab(name: string, param?: any) {
    if (!name) return;
    const { System } = SingleConfig.Instance;
    if (!System.routeData || !System.routeData[name]) return;
    let path: any = System.routeData[name];
    let url = "";
    url = "/" + path.url + "?" + this.ParamUtils(param);
    uni.switchTab({
      url: url
    });
  }
  /**
   * 关闭当前页面，返回上一页面或多级页面。
   * @param num
   */
  async backPage(num?: number) {
    let delta = num ? num : 1;
    uni.navigateBack({
      delta: delta
    });
  }

  /** 参数转换string */
  ParamUtils(param?: any) {
    if (!param) return "";
    let paramstring = "";
    Object.keys(param).forEach(function(key) {
      let dKey = key.substring(0, key.length);
      paramstring += dKey + "=" + param[key] + "&";
    });
    return paramstring;
  }
}
