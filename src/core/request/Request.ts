import Vue from "vue";
/**
 * 请求
 * @param  apiObject api对象
 */

export class Request {
  async Api(apiObject: any, callback: any) {
    /** 服务器地址 */
    const baseUrl = "http://127.0.0.1:3000/";
    uni.showLoading({
      title: "加载中"
    });
    console.log("发起请求:", apiObject.url, "参数：", apiObject.param, "方法：", apiObject.method);
    await uni.request({
      url: baseUrl + apiObject.url,
      method: apiObject.method,
      data: apiObject.param,
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: async res => {
        uni.hideLoading();
        if (!res) return;
        console.log("请求返回:", res.data);
        await callback(res);
      }
    });
  }
}
/**
 * 数据返回
 * @param apiObject api对象
 */
export default class callback {
  Request = new Request();
  async Api(apiObject: any) {
    const response = new Promise((resolve, reject) => {
      this.Request.Api(apiObject, (res: any) => {
        if (res && res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      });
    });
    return response;
  }
}

// };
