/**
 * 账号
 */
export default class note {
  /** 获取笔记类型 */
  getNoteType() {
    return {
      name: "获取笔记类型",
      method: "GET",
      url: "user/getNoteType",
      param: {}
    };
  }
  /** 添加笔记 */
  addNote(param: pAddNote) {
    return {
      name: "添加笔记",
      method: "POST",
      url: "user/addnote",
      param: param
    };
  }
}
export class pAddNote {
  /** 作者id */
  userId: number;
  /** 作者头像 */
  userPhoto: string;
  /** 作者昵称 */
  userNickName: string;
  /** 笔记类型  */
  noteType: string;
  title: string;
  creatTime: string;
  describes: string;
  content: string;
  readNum: string;
  noteState: string;
  noteRemarks: string;
  constructor() {
    this.userId = 0;
    this.userPhoto = "";
    this.userNickName = "";
    this.noteType = "";
    this.title = "";
    this.creatTime = "";
    this.describes = "";
    this.content = "";
    this.readNum = "";
    this.noteState = "";
    this.noteRemarks = "";
  }
}
