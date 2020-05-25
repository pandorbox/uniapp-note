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
  /** 获取我的笔记 */
  getMyNoteList() {
    return {
      name: "获取我的笔记",
      method: "GET",
      url: "user/getMyNoteList",
      param: {}
    };
  }
}
export class pAddNote {
  /** 作者id */
  userId: number;
  /** 作者头像 */
  userPhoto: string;
  /** 作者名 */
  userNickName: string;
  /** 笔记类型 */
  noteType: string;
  /** 笔记标题 */
  title: string;
  /** 创建时间 */
  creatTime: string;
  /** 描述 */
  describes: string;
  /** 代码 */
  content: string;
  /** 阅读量 */
  readNum: number;
  /** 笔记状态  0：未发布 10：待审核 20：审核通过*/
  noteState: 0 | 10 | 20;
  /** 笔记备注 hot:热门 today:今日推荐 */
  noteRemarks: "hot" | "today" | "";
  constructor() {
    this.userId = 0;
    this.userPhoto = "";
    this.userNickName = "";
    this.noteType = "";
    this.title = "";
    this.creatTime = "";
    this.describes = "";
    this.content = "";
    this.readNum = 0;
    this.noteState = 0;
    this.noteRemarks = "";
  }
}
