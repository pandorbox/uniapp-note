import BaseLogic, { Data as BaseData } from "@qjk/npm-pack/dist/core/base/BaseLogic";
import NetData from "./NData";
import Note from "../../../_core/_item/note";
export class Data extends BaseData {
  /** 笔记 */
  note: Note;
  constructor() {
    super();
    this.note = new Note();
    this.needLogin = true;
  }
}

/**
 * 添加笔记
 */
export default class Logic extends BaseLogic {
  data = new Data();
  netData = new NetData();
  constructor() {
    super();
  }
  async onBeingCreated() {
    await this.netData.getNetData(this.param);
    this.data.items = this.netData.data.items;
    await this.refreshData();
  }
  async onType(param: { index: number }) {
    let type = this.data.items[param.index].typeName;
    this.data.note.noteType = type;
  }
  async onInput(param: { type: "title" | "content" | "describes"; value: string }) {
    this.data.note[param.type] = param.value;
  }
  /** 添加 */
  async onAdd() {
    this.data.note.noteState = 0;
    await this.onSubmit();
  }
  /** 添加发布 */
  async onAddPush() {
    this.data.note.noteState = 10;
    await this.onSubmit();
  }
  /** 提交 */
  async onSubmit() {
    let time = new Date();
    this.data.note.userId = this.data.user.id;
    this.data.note.creatTime = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
    this.data.note.userNickName = this.data.user.name;
    this.data.note.userPhoto = this.data.user.photo;
    let res = await this.netData.addNoteData(this.data.note);
    if (!res) return;
    await this.toast.open("添加成功", "success", 1000);
    // this.data.note = new Note();
    // let that = this;
    // let openPage = function() {
    //   that.router.backPage(1);
    // };
    // setTimeout(openPage, 1000);
  }
}
