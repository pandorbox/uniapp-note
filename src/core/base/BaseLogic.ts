import Vue from "vue";
import BaseNetData, { NParam as LParam } from "./BaseNData";
import Page from "../utils/Page";
import Storage from "../utils/Storage";
import UserInfo from "../item/userInfo";
import Toast from "../utils/Toast";
import SetTitle from "../utils/SetNavtit";
import Platform from "../utils/Platform";

export class Param extends LParam {}
export class Data {
  /** 数据组 */
  items: Array<any>;
  /** 登录 */
  needLogin: boolean;
  /** 用户 */
  user: UserInfo;
  constructor() {
    this.items = [];
    this.needLogin = false;
    this.user = new UserInfo();
  }
}
/**
 * 基础逻辑
 */
export default class BaseLogic {
  data: Data;
  param: Param;
  NetData: BaseNetData<Param>;
  /** 页面 */
  page: Page;
  /** token */
  storage: Storage;
  /** 吐司 */
  toast: Toast;
  /** 标题设置 */
  setNav: SetTitle;
  /** 平台 */
  platform: Platform;
  constructor() {
    this.param = new Param();
    this.data = new Data();
    this.NetData = new BaseNetData();
    this.page = new Page();
    this.storage = new Storage();
    this.toast = new Toast();
    this.setNav = new SetTitle();
    this.platform = new Platform();
  }
  /**
   * 刷新视图
   * @param data 数据
   */
  async refreshData(data?: any) {
    // uni-加载等待显示
    uni.showLoading();
    this.data.items = [];
    await this.data.items.splice(0, 0, data);
    // uni-加载等待隐藏
    uni.hideLoading();
    console.log("data:", this.data.items[0]);
  }
  /**
   * 生命周期-创建前
   */
  async onBeingBeforeCreate() {}
  /**
   * 生命周期-创建完成
   */
  async onBeingCreated() {}
  /**
   * 生命周期-页面加载选项数据
   * @param options 参数
   */
  async onBeingLoadOptions(option: any) {
    if (option.navtit) {
      this.setNav.navTit(option.navtit);
    }
    if (this.platform.platform == "mp") {
      this.data.user = await this.storage.mpgetUser();
    } else {
      this.data.user = await this.storage.getUser();
    }
    if (option.id) {
      this.param.id = option.id;
    }
  }
  /**
   * 生命周期-页面加载
   * @param options 参数
   */
  async onBeingLoad() {}
  /**
   * 生命周期-页面初次渲染完成
   */
  async onBeingReady() {}
  /**
   * 生命周期-页面显示
   */
  async onBeingShow() {
    if (this.platform.platform == "mp") {
      this.data.user = await this.storage.mpgetUser();
    } else {
      this.data.user = await this.storage.getUser();
    }
  }
  /**
   * 生命周期-页面隐藏
   */
  async onBeingHide() {}
  /**
   * 生命周期-页面卸载
   */
  async onBeingUnload() {}
  /**
   * 事件-页面下拉
   */
  async onPullDownRefresh() {
    console.log("下拉");
  }
  /**
   * 事件-页面上拉触底
   */
  async onReachBottom() {}
  /**
   * 事件-右上角分享
   */
  async onShareAppMessage() {
    console.log("分享");
  }
  /**
   * 事件-页面滚动
   */
  async onPageScroll() {}
}
