import Request from "../core/request/RequestConfig";

/**
 * 站点
 */
export default class Site extends Request {
  constructor() {
    super();
    this._apiDomain = "http://127.0.0.1:3000";
    this._siteAlias = "noteBook";
    this._token = "";
    this._domain = "";
  }
}
