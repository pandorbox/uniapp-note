/**
 * 课程
 */
import ParamUtils from "../utils/ParamUtils";
export default class Kecheng {
  /** 默认列表 */
  deafultList() {
    return {
      name: "默认列表",
      method: "GET",
      url: "defkclist",
      param: {}
    };
  }
  /** tab 切换列表 */
  tabCutList(param: Param) {
    return {
      name: "tab列表",
      method: "POST",
      url: "thiskclist",
      param: param
    };
  }
  /** 添加课程步骤一 */
  addKechengOne(param: Param) {
    return {
      name: "添加课程步骤一",
      method: "POST",
      url: "demo/addkclistone",
      param: param
    };
  }
  /** 添加课程步骤二 */
  addKechengTwo(param: Param) {
    return {
      name: "添加课程步骤二",
      method: "POST",
      url: "demo/addkclist",
      param: param
    };
  }
  /** 获取通告 */
  getNoticList() {
    return {
      name: "获取通告",
      method: "GET",
      url: "notic",
      param: {}
    };
  }
  /** 首页获取课程列表一 */
  indexGetClassListOne() {
    return {
      name: "首页获取课程列表一",
      method: "GET",
      url: "kclistone",
      param: {}
    };
  }
  /** 首页获取课程列表二 */
  indexGetClassListTwo() {
    return {
      name: "首页获取课程列表二",
      method: "GET",
      url: "kclisttwo",
      param: {}
    };
  }
  /** 首页获取课程列表三 */
  indexGetClassListThr() {
    return {
      name: "首页获取课程列表三",
      method: "GET",
      url: "kclistthr",
      param: {}
    };
  }
  /** 首页获取课程列表四 */
  indexGetClassListFou() {
    return {
      name: "首页获取课程列表四",
      method: "GET",
      url: "kclistfou",
      param: {}
    };
  }
}
export class Param {}
