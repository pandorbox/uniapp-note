import Kecheng from "./kecheng";
import Account from "./account";
/**
 * api
 */
export default class index {
  /** 课程 */
  Kecheng: Kecheng;
  /** 账号 */
  Account: Account;
  constructor() {
    this.Kecheng = new Kecheng();
    this.Account = new Account();
  }
}
