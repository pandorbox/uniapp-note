export default class user {
  /** 存储token */
  async setUser(user: any) {
    uni.setStorage({
      key: "user",
      data: user,
      success: function() {}
    });
  }
  /** 获取token */
  async getUser() {
    let user: Array<any> = [];
    uni.getStorage({
      key: "user",
      success: function(res) {
        user.push(res.data);
      }
    });
    return user[0];
  }
  /** 清除token */
  async removeUser() {
    uni.removeStorage({
      key: "user",
      success: function(res) {
        console.log("success");
      }
    });
  }
}
