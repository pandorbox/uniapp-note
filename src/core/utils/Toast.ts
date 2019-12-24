export default class toast {
  /** 吐司
   * @param tit 标题
   * @param icon 图标 "success" | "loading" | "none" | undefined
   * @param duration 显示时间 默认：1500
   */
  async open(tit: any, icon?: any, duration?: number) {
    uni.showToast({
      title: tit,
      icon: icon,
      duration: duration
    });
  }
  /** 关闭吐司
   * @param time 关闭时长 默认1000ms
   */
  async close(time?: number) {
    setTimeout(
      function() {
        uni.hideToast();
      },
      time ? time : 1000
    );
  }
}
