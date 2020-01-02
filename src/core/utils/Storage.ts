export default class user {
  /** h5存储token */
  async setUser(user: any) {
    uni.setStorage({
      key: "user",
      data: user,
      success: function() {}
    });
  }
  /** h5获取token */
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
  /** h5清除token */
  async removeUser() {
    uni.removeStorage({
      key: "user",
      success: function(res) {}
    });
  }
  /** mp存储token */
  async mpsetUser(user: any) {
    await uni.setStorageSync("user", user);
  }
  /** mp获取token */
  async mpgetUser() {
    let user: Array<any> = [];
    let obj = await uni.getStorageSync("user");
    user.push(obj);
    return user[0];
  }
  /** mp清除token */
  async mpremoveUser() {
    await uni.removeStorageSync("user");
  }
}
