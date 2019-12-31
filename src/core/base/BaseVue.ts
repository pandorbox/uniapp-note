import { Vue, Component, Provide, Watch } from "vue-property-decorator";

/**
 * 基础Vue
 */
@Component({})
export default class BaseVue extends Vue {
  /** 数据 */
  data = {};
  /** 数据 */
  Data: any;
  /**  */
  logic: any;
  /** 平台 */
  constructor() {
    super();
    this.logic = {};
  }
  onRefreshView(data: any) {
    if (!data) return;
    this.data = data;
  }
  /**
   * 发送事件
   * @param event 参数
   * @param name 名称
   */
  async emit(event: any, name: string) {
    if (!this.logic || !name || !this.logic[name]) return;
    let e = event;

    // 兼容小程序
    if (typeof window == "undefined" && e && e.mp && e.mp.detail && e.mp.detail["__args__"] && e.mp.detail["__args__"][0]) {
      e = e.mp.detail["__args__"][0];
    }

    await this.logic[name](e);
  }
  /**
   * vue生命周期-创建前
   */
  async beforeCreate() {
    console.log("vue生命周期-创建前:");
  }
  /**
   * vue生命周期-创建完成
   */
  async created() {
    console.log("vue生命周期-创建完成:");
    if (!this.logic) return;
  }
  /**
   * vue生命周期-挂载前
   */
  async beforeMount() {
    console.log("vue生命周期-挂载前:");
  }
  /**
   * vue生命周期-挂载完成
   */
  async mounted() {
    console.log("vue生命周期-挂载完成:");
  }
  /**
   * vue生命周期-销毁前
   */
  async beforeDestroy() {
    console.log("vue生命周期-销毁前:");
  }
  /**
   * 生命周期-页面加载
   */
  async onLoad(option: any) {
    if (!this.logic) return;
    await this.logic.onBeingLoadOptions(option);
  }
  /**
   * mp生命周期-页面初次渲染完成
   */
  async onReady() {
    console.log("mp生命周期-页面初次渲染完成:");
    if (this.logic) await this.logic.onBeingReady();
  }
  /**
   * mp生命周期-页面显示
   */
  async onShow() {
    console.log("mp生命周期-页面显示:");
    if (this.logic) await this.logic.onBeingShow();
  }
  /**
   * mp生命周期-页面隐藏
   */
  async onHide() {
    console.log("mp生命周期-页面隐藏:");
    if (this.logic) await this.logic.onBeingHide();
  }
  /**
   * mp生命周期-页面卸载
   */
  async onUnload() {
    if (this.logic) await this.logic.onBeingUnload();
  }
  /**
   * mp事件-页面下拉
   */
  async onPullDownRefresh() {
    if (this.logic) await this.logic.onPullDownRefresh();
  }
  /**
   * mp事件-页面上拉触底
   */
  async onReachBottom() {
    if (this.logic) await this.logic.onReachBottom();
  }
  /**
   * mp事件-右上角分享
   */
  async onShareAppMessage() {
    if (this.logic) await this.logic.onShareAppMessage();
  }
  /**
   * mp事件-页面滚动
   */
  async onPageScroll() {
    if (this.logic) await this.logic.onPageScroll();
  }
  // /**
  //  * App生命周期
  //  */
  // async onAppLifecycle(e: any) {
  //   console.log("App生命周期:", e.status);
  //   if (!this.logic) return;
  //   switch (e.status) {
  //     case "ready":
  //       // 页面挂载(初始化)
  //       await this.onLoad({});
  //       break;
  //     case "resume":
  //       // 页面激活(恢复)
  //       await this.onShow();
  //       break;
  //     case "pause":
  //       // 页面失活(暂停)
  //       await this.onUnload();
  //       break;
  //   }
  // }
}
