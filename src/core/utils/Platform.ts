declare const app: any;
declare const wx: any;
declare const swan: any;

/**
 * 平台
 */
export default class Platform {
  /** 平台(web:网页、mp:小程序、app:app) */
  platform: "web" | "mp" | "app" | "";
  /** Web平台(browser:普通浏览器、wechatBrowser:微信浏览器) */
  webPlatform: "browser" | "wechatBrowser" | "";
  /** app平台(android:安卓、ios:ios) */
  appPlatform: "android" | "ios" | "";
  constructor() {
    this.platform = "";
    this.webPlatform = "";
    this.appPlatform = "";
    if (typeof window != "undefined") {
      // web端
      this.platform = "web";
      const ua = window.navigator.userAgent.toLowerCase();
      if (ua.includes("micromessenger")) {
        // 微信浏览器
        this.webPlatform = "wechatBrowser";
      } else {
        this.webPlatform = "browser";
      }
      return;
    }

    if (typeof app != "undefined") {
      // app端
      this.platform = "app";
      return;
    }
    // 小程序端
    this.platform = "mp";
  }
}
