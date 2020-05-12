/**
 * 账号
 */
export default class account {
  /** 登录 */
  login(param: pLogin) {
    return {
      name: "登录",
      method: "POST",
      url: "user/login",
      param: param
    };
  }
  /** 注册 */
  register(param: pRegiste) {
    return {
      name: "注册",
      method: "POST",
      url: "user/registe",
      param: param
    };
  }
  /** 用户信息 */
  userMsg(param: myMsg) {
    return {
      name: "用户信息",
      method: "POST",
      url: "user/mymsg",
      param: param
    };
  }
}
export class pLogin {
  /** 用户名 */
  username: string;
  /** 密码 */
  userpwd: string;
  constructor() {
    this.username = "";
    this.userpwd = "";
  }
}
export class pRegiste {
  /** 用户名 */
  username: string;
  /** 密码 */
  userpwd: string;
  constructor() {
    this.username = "";
    this.userpwd = "";
  }
}
export class myMsg {
  /** 用户名 */
  username: string;
  constructor() {
    this.username = "";
  }
}
