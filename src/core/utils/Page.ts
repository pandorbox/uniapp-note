import Routers from "@/config/Router";

export default class page {
  /**
   * 保留当前页面，跳转到指定页面
   * @param name
   * @param params
   */
  async openPage(name: string, param?: any) {
    if (!name) return;
    let path: any = Routers;
    let url = "";
    let tit = "";
    if (path[name].tit !== "") {
      url = "/" + path[name].url + "?" + this.ParamUtils(param) + "&navtit=" + path[name].tit;
    } else {
      url = "/" + path[name].url + "?" + this.ParamUtils(param);
    }
    uni.navigateTo({
      url: url
    });
  }
  /**
   * 关闭当前页面，跳转到应用内的某个页面。
   * @param name
   * @param params
   */
  async closeOpen(name: string, param?: any) {
    if (!name) return;
    let path: any = Routers;
    let url = "";
    if (path[name].tit !== "") {
      url = "/" + path[name].url + "?" + this.ParamUtils(param) + "&navtit=" + path[name].tit;
    } else {
      url = "/" + path[name].url + "?" + this.ParamUtils(param);
    }
    uni.redirectTo({
      url: url
    });
  }
  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
   * @param name
   * @param params
   */
  async openTab(name: string, param?: any) {
    if (!name) return;
    let path: any = Routers;
    let url = "";
    url = "/" + path[name].url + "?" + this.ParamUtils(param);
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
  /**
   * 获取当前页面参数
   * @param param
   */
  async getPageUrlParam() {}

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
