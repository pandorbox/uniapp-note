import BaseNetData, { NData, NParam } from "@qjk/npm-pack/dist/core/base/BaseNData";
import NetApi from "../../../_core/_api/index";
import Note from "../../../_core/_item/note";

export class Param extends NParam {
  constructor() {
    super();
  }
}
export class Data extends NData {
  constructor() {
    super();
  }
}

/**
 * 添加笔记数据
 */
export default class NetData extends BaseNetData<Param> {
  data = new Data();
  param = new Param();
  Napi = new NetApi();
  constructor() {
    super();
  }
  async getNetData(param: NParam, logTag?: string): Promise<Data> {
    /**获取笔记类型 */
    const res = await this.request.call(this.Napi.Note.getNoteType());
    console.log(res);
    this.data.items = res;
    return this.data;
  }
  async addNoteData(note: Note) {
    /** 添加笔记 */
    const res = await this.request.call(
      this.Napi.Note.addNote({
        userId: note.userId,
        userPhoto: note.userPhoto,
        userNickName: note.userNickName,
        noteType: note.noteType,
        title: note.title,
        creatTime: note.creatTime,
        describes: note.describes,
        content: note.content,
        readNum: note.readNum,
        noteState: note.noteState,
        noteRemarks: note.noteRemarks
      })
    );
    return res ? true : false;
  }
}
