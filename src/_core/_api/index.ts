import Account from "./account";
import Note from "./note";
/**
 * api
 */
export default class index {
  /** 账号 */
  Account: Account;
  /** 笔记 */
  Note: Note;
  constructor() {
    this.Account = new Account();
    this.Note = new Note();
  }
}
