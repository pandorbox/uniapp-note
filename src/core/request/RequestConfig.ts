/**
 * 请求配置
 */
export default class RequestConfig {
  /** 域名 */
  _domain?: string;
  /** API接口域名 */
  _apiDomain: string;
  /** 站点别名 */
  _siteAlias: string;
  /** token */
  _token: string;

  constructor() {
    this._domain = "";
    this._apiDomain = "";
    this._siteAlias = "";
    this._token = "";
  }
}
