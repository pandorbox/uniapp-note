/**
 * 账号
 */
import ParamUtils from "../utils/ParamUtils";
export default class account {
  /** 登录 */
  login(param: pLogin) {
    return {
      name: "登录",
      method: "POST",
      url: "demo/login",
      param: param
    };
  }
  /** 注册 */
  register(param: pRegiste) {
    return {
      name: "注册",
      method: "POST",
      url: "demo/registe",
      param: param
    };
  }
  /** 用户信息 */
  userMsg(param: myMsg) {
    return {
      name: "用户信息",
      method: "POST",
      url: "demo/mymsg",
      param: param
    };
  }
  /** 获取用户详细信息 */
  userDetailMsg(param: pLogin) {
    return {
      name: "获取用户详细信息",
      method: "POST",
      url: "demo/getusermsg",
      param: param
    };
  }
  /** 我的课程 */
  myKecheng(param: pLogin) {
    return {
      name: "我的课程",
      method: "POST",
      url: "demo/mykc",
      param: param
    };
  }
  /** 修改信息 */
  changeMsg(param: pLogin) {
    return {
      name: "修改信息",
      method: "POST",
      url: "demo/addmymsg",
      param: param
    };
  }
  /** 修改头像 */
  changePhoto(param: pLogin) {
    return {
      name: "修改头像",
      method: "POST",
      url: "demo/adduserimg",
      param: param
    };
  }
  /** 添加个人笔记 */
  addNoteBook(param: pLogin) {
    return {
      name: "添加个人笔记",
      method: "POST",
      url: "demo/addmybj",
      param: param
    };
  }
  /** 获取个人笔记 */
  getNoteBook(param: myNotebok) {
    return {
      name: "获取个人笔记",
      method: "POST",
      url: "demo/mybj",
      param: param
    };
  }
  /** 获取关注列表 */
  getGuanzhu(param: pLogin) {
    return {
      name: "获取关注列表",
      method: "POST",
      url: "demo/myguanzhu",
      param: param
    };
  }
  /** 获取订阅列表 */
  getDingyue(param: pLogin) {
    return {
      name: "获取订阅列表",
      method: "POST",
      url: "demo/mydinyue",
      param: param
    };
  }
  /** 获取课程详情 */
  getListDetail(param: pLogin) {
    return {
      name: "获取课程详情",
      method: "POST",
      url: "thiskclistdetail",
      param: param
    };
  }
  /** 获取课程评价 */
  getClassPinjia(param: pLogin) {
    return {
      name: "获取课程评价",
      method: "POST",
      url: "demo/kcpj",
      param: param
    };
  }
  /** 获取课程是否订阅 */
  isDinyue(param: pLogin) {
    return {
      name: "获取课程是否订阅",
      method: "POST",
      url: "demo/isdinyue",
      param: param
    };
  }
  /** 关注 */
  addGuanzhu(param: pLogin) {
    return {
      name: "关注",
      method: "POST",
      url: "demo/addmyguanzhu",
      param: param
    };
  }
  /** 订阅 */
  addDinyue(param: pLogin) {
    return {
      name: "订阅",
      method: "POST",
      url: "demo/addmydinyue",
      param: param
    };
  }
  /** 评价 */
  addPingjia(param: pLogin) {
    return {
      name: "评价",
      method: "POST",
      url: "demo/addkcpj",
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
export class myNotebok {
  /** 用户名 */
  username: string;
  constructor() {
    this.username = "";
  }
}
