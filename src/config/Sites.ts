import Request from "@qjk/npm-pack/dist/core/request/RequestConfig";

/**
 * 站点
 */
export default class Site extends Request {
  constructor() {
    super();
    this._apiDomain = "http://127.0.0.1:3000";
    // this._apiDomain = "http://49.233.174.197:3002";
    this._siteAlias = "noteBook";
    this._token = "";
    this._domain = "";
  }
}
