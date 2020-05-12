import Account from "./account";
/**
 * api
 */
export default class index {
  /** 账号 */
  Account: Account;
  constructor() {
    this.Account = new Account();
  }
}
