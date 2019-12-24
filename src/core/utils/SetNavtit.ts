export default class setNavtit {
  /** 标题 */
  async navTit(title: string) {
    uni.setNavigationBarTitle({
      title: title
    });
  }
}
