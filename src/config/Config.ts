import Router from "./Router";
import CoreSingleConfig from "@qjk/npm-pack/dist/core/config/SingleConfig";
import Site from "./Sites";
export default class Config {
  constructor() {
    this.initCore();
    this.initSite();
    this.initExtends();
  }
  initCore() {
    CoreSingleConfig.Instance.System.routeData = Router;
    CoreSingleConfig.Instance.System.request = new Site();
    CoreSingleConfig.Instance.init();
  }
  initSite() {}
  initExtends() {}
}
